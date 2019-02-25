import React, { Component } from 'react';
import axios from 'axios'

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
            }
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
    render() {
        return (
            <div>
                <p>Im a single character </p>

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
                {this.state.info.weapons.map((weapon, i) =>
                    (<div key={i}>Weapon: {weapon.name}
                        Damage: {weapon.damage}
                        Damage Details: {weapon.damageDetails}
                        Special Affects:{weapon.specialAffects}

                    </div>)
                )}
            </div>
        );
    }
}

export default Character;