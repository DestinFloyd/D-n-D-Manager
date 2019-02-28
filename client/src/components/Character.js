import React, { Component } from 'react';
import axios from 'axios'
import NewWeaponForm from './NewWeaponForm'
import Weapon from './Weapon'
import Spell from './Spell';
import Spell2 from './Spell2';

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
                weapons: [],
                spells: []
            },
            showAddWeapon: false,
            wantToDelete: false,
            editView: false,
            spellsReturn: { results: [] }

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

    toggleDelete = () => {
        this.setState({ wantToDelete: !this.state.wantToDelete })
    }
    deleteCharacter = () => {
        axios.delete(`/api/p4/characters/${this.props.match.params.characterId}`)
            .then(() => { this.props.history.goBack() })

    }
    toggleEditView = () => {
        this.setState({ editView: !this.state.editView })
    }
    handleChange = (event) => {

        const newInfo = { ...this.state.info }
        console.log(newInfo)
        newInfo[event.target.name] = event.target.value
        this.setState({ info: newInfo })
    }
    submitEdited = (event) => {
        event.preventDefault()
        const updatedInfo = this.state.info
        const CharacterId = this.props.match.params.characterId
        axios.put(`/api/p4/characters/${CharacterId}/`, updatedInfo)
            .then(() => { this.toggleEditView() })
        // .then(()=>{ this.getSingleCharacter()})
    }
    findSpell = () => {
        axios.get('http://www.dnd5eapi.co/api/spells/')
            // .then((res) => { console.log(res.data) })
            .then((res) => { this.setState({ spellsReturn: res.data }) })

    }
    // modifiers = (idOne, idTwo) => {
    //     console.log(idOne)
    //     if (document.getElementById(idOne).innerHTML >= 18) {
    //         document.getElementById(idTwo).innerHTML = "+3"
    //     }
    // }
    spellAdd = (url) => {
        axios.get(url).then((res) => {
            let returnedData = res.data
            console.log(res.data)
            const CharacterId = this.props.match.params.characterId
            returnedData.characterId = CharacterId
            // console.log(returnedData.desc[0])
            returnedData.desc = returnedData.desc[0]
            // returnedData.higher_level =  returnedData.higher_level[0]
            axios.post('/api/p4/spells/', returnedData).then(console.log("DONE"))
        })
    }
    doneWithSpells = () => {
        this.setState({ spellsReturn: { results: [] } })
    }


    render() {
        return (
            <div>
                <p>Im a single character </p>
                <button onClick={this.toggleEditView}> Edit </button>
                {this.state.editView ?


                    <div>
                        <form onSubmit={this.submitEdited}>

                            Name: <input type="text" placeholder='Name' name='name' onChange={this.handleChange} defaultValue={this.state.info.name} />
                            Race: <input type="text" placeholder="Race" name='race' onChange={this.handleChange} defaultValue={this.state.info.race} />
                            Class: <input type="text" placeholder="Class" name='characterClass' onChange={this.handleChange} defaultValue={this.state.info.characterClass} />
                            Intelligence: <input type="text" placeholder="Intelligence" name='intelligence' onChange={this.handleChange} defaultValue={this.state.info.intelligence} />
                            Dexterity: <input type="text" placeholder="Dexterity" name='dexterity' onChange={this.handleChange} defaultValue={this.state.info.dexterity} />
                            Strength: <input type="text" placeholder="Strength" name='strength' onChange={this.handleChange} defaultValue={this.state.info.strength} />
                            Wisdom: <input type="text" placeholder='Wisdom' name='wisdom' onChange={this.handleChange} defaultValue={this.state.info.wisdom} />
                            Constitution <input type="text" placeholder="Constitution" name='constitution' onChange={this.handleChange} defaultValue={this.state.info.constitution} />
                            Charisma: <input type="text" placeholder="Charisma" name='charisma' onChange={this.handleChange} defaultValue={this.state.info.charisma} />
                            HP: <input type="text" placeholder='Hit Points' name='hitPoints' onChange={this.handleChange} defaultValue={this.state.info.hitPoints} />
                            AC: <input type="text" placeholder='ac' name='ac' onChange={this.handleChange} defaultValue={this.state.info.ac} />

                            <button>Submit Edited Character</button>
                        </form>
                    </div>




                    :
                    <div>
                        {/* <button onClick={this.modifiers("name", "nameMod")}> check Mods</button> */}
                        <button onClick={this.toggleDelete}>Delete this Character</button>
                        {this.state.wantToDelete ? <button onClick={this.deleteCharacter}>DELETE THIS CHARACTER?</button> : null}
                        <p> {this.state.info.name}</p>
                        <p>Race: {this.state.info.race}</p>
                        <p>Class: {this.state.info.characterClass}</p>
                        INT <p id="name">{this.state.info.intelligence}</p> <p id='nameMod'> </p>
                        <p>DEX {this.state.info.dexterity}</p>
                        <p>STR {this.state.info.strength}</p>
                        <p>WIS {this.state.info.wisdom}</p>
                        <p>CON {this.state.info.constitution}</p>
                        <p>CHA {this.state.info.charisma}</p>
                        <p>HP {this.state.info.hitPoints}</p>
                        <p>AC {this.state.info.ac}</p>

                        <button onClick={this.toggleForm}>Add Weapon</button>
                        {this.state.showAddWeapon ? <NewWeaponForm toggleForm={this.toggleForm} characterId={this.state.info.characterId} /> : null}
                        <div>
                            {this.state.info.spells.map((spell, i) => (
                                <div key={i}>
                                    <Spell2 spell={spell} />
                                </div>
                            ))}
                            <button onClick={this.doneWithSpells}> Done with spells</button>
                        </div>

                        <div>
                            <button onClick={this.findSpell}> Get spells</button>
                            <button onClick={this.doneWithSpells}> Done with spells</button>
                            {this.state.spellsReturn.results.map((spell, i) => (
                                <div key={i}>

                                    <Spell spellName={spell.name} spellAdd={this.spellAdd} url={spell.url} />
                                </div>
                            ))}
                            <button onClick={this.doneWithSpells}> Done with spells</button>
                        </div>


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

                }

            </div>
        );
    }
}

export default Character;