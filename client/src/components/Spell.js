import React, { Component } from 'react';
import styled from 'styled-components'

const MyOtherButton = styled.button`
border-radius: 20%;
background-color: silver;
color: white;
font-weight: bold;
padding: 1%;
`
class Spell extends Component {

addSpell=()=>{
    console.log("Clicked")
    this.props.spellAdd(this.props.url)
}
    render() {
        return (
            <div>
               {/* <button onClick={this.spellAdd(`${spell.name}`) }  > (+)</button> */}
              <MyOtherButton onClick={this.addSpell}> Add! </MyOtherButton>{this.props.spellName}
            </div>
        );
    }
}

export default Spell;