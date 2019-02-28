import React, { Component } from 'react';
import axios from 'axios'
import NewWeaponForm from './NewWeaponForm'
import Weapon from './Weapon'
import Spell from './Spell';
import Spell2 from './Spell2';
import styled from 'styled-components'
import parchmentPaper from './images/parchment-paper2.gif'

const SingleCharacter = styled.div`
background-image: url(${parchmentPaper});
display: flex; 
justify-content: center;
align-items: center;
min-width: 40vw;
background-position-x: center;
background-repeat: no-repeat;
overflow: hidden;
text-align: center;
`
const MyButton = styled.button`
border-radius: 20%;
background-color: black;
color: white;
font-weight: bold;
padding: 1%;
`
const DeleteButton = styled.button`
border-radius: 20%;
background-color: red;
color: white;
font-weight: bold;
padding: 1%;
`
const Container = styled.div`
display: flex; 
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
width: 350px;
`
const SingleName = styled.div`
font-size: 4em;
margin-block-end: 0px;
`
const Stats = styled.div`
border: solid black;
height: 125px;
width: 125px;
font-size: 2em;
`
const OtherStat = styled.div`
height: 125px;
width: 125px;
font-size: 2em;
`
const RaceClass = styled.div`
font-size: 2em;

`

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
        
    }
    findSpell = () => {
        axios.get('www.dnd5eapi.co/api/spells/')
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
            returnedData.desc = returnedData.desc[0]
            axios.post('/api/p4/spells/', returnedData).then(console.log("DONE"))
        })
    }
    doneWithSpells = () => {
        this.setState({ spellsReturn: { results: [] } })
    }


    render() {
        return (
            <SingleCharacter>
                
                <MyButton onClick={this.toggleEditView}> Edit </MyButton>
                {this.state.editView ?


                    <div>
                        <form onSubmit={this.submitEdited}>

                           <SingleName> Name: <input type="text" placeholder='Name' name='name' onChange={this.handleChange} defaultValue={this.state.info.name} /></SingleName>
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

                            <MyButton>Submit Edited Character</MyButton>
                        </form>
                    </div>




                    :
                    <div>
                        {/* <button onClick={this.modifiers("name", "nameMod")}> check Mods</button> */}
                        <DeleteButton onClick={this.toggleDelete}>Delete this Character</DeleteButton>
                        {this.state.wantToDelete ? <DeleteButton onClick={this.deleteCharacter}>DELETE THIS CHARACTER ? </DeleteButton> : null}
                        <SingleName>  <p> {this.state.info.name}</p></SingleName>
                        
                        <br/>
                        
                        <RaceClass>{this.state.info.characterClass} {this.state.info.race} </RaceClass>
                        {/* INT <p id="naStatsme">{this.state.info.intelligence}</p> <p id='nameMod'> </p> */}
                        <Container> 
                        <Stats>INT{this.state.info.intelligence}</Stats>
                        <Stats>DEX {this.state.info.dexterity}</Stats>
                        <Stats>STR {this.state.info.strength}</Stats>
                        <Stats>WIS {this.state.info.wisdom}</Stats>
                        <Stats>CON {this.state.info.constitution}</Stats>
                        <Stats>CHA {this.state.info.charisma}</Stats>
                        <OtherStat>HP {this.state.info.hitPoints}</OtherStat>
                        <OtherStat>AC {this.state.info.ac}</OtherStat>
                        </Container>

                        <MyButton onClick={this.toggleForm}>Add Weapon</MyButton>
                        {this.state.showAddWeapon ? <NewWeaponForm toggleForm={this.toggleForm} characterId={this.state.info.characterId} /> : null}
                        <div>
                            {this.state.info.spells.map((spell, i) => (
                                <div key={i}>
                                    <Spell2 spell={spell}/>
                                </div>
                            ))}
                            
                        </div>

                        <div>
                            <MyButton onClick={this.findSpell}> Get spells</MyButton>
                            <MyButton onClick={this.doneWithSpells}> Done with spells</MyButton>
                            {this.state.spellsReturn.results.map((spell, i) => (
                                <div key={i}>

                                    <Spell spellName={spell.name} spellAdd={this.spellAdd} url={spell.url} />
                                </div>
                            ))}
                           
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

            </SingleCharacter>
        );
    }
}

export default Character;