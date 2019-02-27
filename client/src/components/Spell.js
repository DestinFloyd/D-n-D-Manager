import React, { Component } from 'react';

class Spell extends Component {

addSpell=()=>{
    console.log("Clicked")
    this.props.spellAdd(this.props.url)
}
    render() {
        return (
            <div>
               {/* <button onClick={this.spellAdd(`${spell.name}`) }  > (+)</button> */}
              <button onClick={this.addSpell}> Add! </button>{this.props.spellName}
            </div>
        );
    }
}

export default Spell;