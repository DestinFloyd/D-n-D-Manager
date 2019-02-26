import React, { Component } from 'react';
import axios from 'axios'
import NewWeaponForm from './NewWeaponForm'
import Weapon from './Weapon'

class Character extends Component {

    state =
        {
            info: {
                characterId: '',
                userId: '',
                name: '',
                race: '',
                characterClass: '',
                intelligence: '',
                dexterity: '',
                strength: '',
                wisdom: '',
                constitution: '',
                charisma: '',
                hitPoints: '',
                ac: '',
                weapons: []
            },
            showAddWeapon: false,
            wantToDelete: false
        }
    componentDidMount() {
        this.getSingleCharacter()

    }
    getSingleCharacter = () => {
        const CharacterId = this.props.match.params.characterId
        axios.get(`/api/p4/characters/${CharacterId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ info: res.data })
            })
    }
    toggleForm = () => {
        this.getSingleCharacter()
        this.setState({ showAddWeapon: !this.state.showAddWeapon })
    }
    toggleForm = () => {
        this.getSingleCharacter()
        this.setState({ showAddWeapon: !this.state.showAddWeapon })
    }
    toggleDelete = () => {
        this.setState({ wantToDelete: !this.state.wantToDelete })
    }
    deleteCharacter = () => {
        axios.delete(`/api/p4/characters/${this.props.match.params.characterId}`)
        .then(()=>{this.props.history.goBack()})
        // .then(()=>{this.props.getAll()})
    
    }
    render() {
        return (
            <div>
                <p>Im a single character </p>
                <button onClick={this.toggleDelete}>Delete this Character</button>
                {this.state.wantToDelete ?<button onClick={this.deleteCharacter}>DELETE THIS CHARACTER?</button> : null}
                <p>Name:{this.state.info.name}</p>
                <p>Race: {this.state.info.race}</p>
                <p>Class: {this.state.info.characterClass}</p>
                <p>INT {this.state.info.intelligence}</p>
                <p>DEX {this.state.info.dexterity}</p>
                <p>STR {this.state.info.strength}</p>
                <p>WIS {this.state.info.wisdom}</p>
                <p>CON {this.state.info.constitution}</p>
                <p>CHA {this.state.info.charisma}</p>
                <p>HP {this.state.info.hitPoints}</p>
                <p>AC {this.state.info.ac}</p>
                
                <button onClick={this.toggleForm}>Add</button> 
                {this.state.showAddWeapon ? <NewWeaponForm toggleForm={this.toggleForm} characterId={this.state.info.characterId} /> : null}              
                {this.state.info.weapons.map((weapon, i) =>

                    (<div key={i}>  
                        <Weapon 
                        getSingleCharacter={this.getSingleCharacter}
                        weaponId={weapon.weaponId}
                        weapon={weapon.name}
                        damage={weapon.damage}
                        damageDetails={weapon.damageDetails}
                        specialAffects={weapon.specialAffects}
                        />
                       
                    </div>)
                )}
            </div>
        );
    }
}

export default Character;