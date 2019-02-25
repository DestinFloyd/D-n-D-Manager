import React, { Component } from 'react';
import axios from 'axios';

class Weapon extends Component {
    deleteWeapon=()=>{
        axios.delete(`/api/p4/weapons/${this.props.weaponId}`)
        .then((res) => {
            this.props.getSingleCharacter()
        })
    }

    render() {
        return (
            <div>
               
                Weapon: {this.props.name}
                Damage: {this.props.damage}
                Damage Details: {this.props.damageDetails}
                Special Affects:{this.props.specialAffects} 
                <button onClick={this.deleteWeapon}>Drop</button>
            </div>
        );
    }
}

export default Weapon;