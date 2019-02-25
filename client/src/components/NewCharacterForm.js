import React, { Component } from 'react';

class NewCharacterForm extends Component {
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
    handleSubmit=()=>{
        console.log("YAY")
    }

    render() {
        return (
            <div>
       <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder='Name' name='name'/>
                <input type="text" placeholder="Race" name='race'/>
                <input type="text" placeholder="Class" name= 'characterClass'/>
                <input type="text" placeholder="Intelligence" name='intelligence'/>
                <input type="text" placeholder="Dexterity" name='dexterity' />
                <input type="text" placeholder="Strength" name='strength'/>
                <input type="text" placeholder='Wisdom' name='wisdom' />
                <input type="text" placeholder="Constitution" name='constitution'/>
                <input type="text" placeholder="Charisma" name='charisma'/>
                <input type="text" placeholder='Hit Points' name='hitPoints'/>
                <input type="text" placeholder='ac' name='ac'/>
                <button>Submit New User</button>
            </form>
            </div>
        );
    }
}

export default NewCharacterForm;