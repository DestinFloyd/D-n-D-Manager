import React, { Component } from 'react';
import axios from 'axios';

class NewCharacterForm extends Component {
    state =
    {
        info: {
            userId: this.props.userId,
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




    handleChange = (event) => {
        console.log("trying")
        const newInfo = { ...this.state.info }
        console.log(newInfo)

        newInfo[event.target.name] = event.target.value
        this.setState({info: newInfo })
        
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const newInfo = this.state.info
        axios.post(`/api/p4/characters/`, newInfo)
        .then((res) => {
            this.props.toggleNewCharacter()

        }).then(()=>{this.props.getSingleUser()})
    }

    render() {
        return (
            <div>
       <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder='Name' name='name' onChange={this.handleChange} />
                <input type="text" placeholder="Race" name='race' onChange={this.handleChange} />
                <input type="text" placeholder="Class" name= 'characterClass' onChange={this.handleChange} />
                <input type="text" placeholder="Intelligence" name='intelligence' onChange={this.handleChange} />
                <input type="text" placeholder="Dexterity" name='dexterity'  onChange={this.handleChange} />
                <input type="text" placeholder="Strength" name='strength' onChange={this.handleChange} />
                <input type="text" placeholder='Wisdom' name='wisdom'  onChange={this.handleChange} />
                <input type="text" placeholder="Constitution" name='constitution' onChange={this.handleChange} />
                <input type="text" placeholder="Charisma" name='charisma' onChange={this.handleChange} />
                <input type="text" placeholder='Hit Points' name='hitPoints' onChange={this.handleChange} />
                <input type="text" placeholder='ac' name='ac' onChange={this.handleChange} />
                
                <button>Submit New Character</button>
            </form>
            </div>
        );
    }
}

export default NewCharacterForm;