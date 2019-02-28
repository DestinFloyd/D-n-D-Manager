import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const MyButton = styled.button`
border-radius: 20%;
background-color: black;
color: white;
font-weight: bold;
padding: 1%;
`

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
                <MyButton onClick={this.deleteWeapon}>Drop</MyButton>
            </div>
        );
    }
}

export default Weapon;