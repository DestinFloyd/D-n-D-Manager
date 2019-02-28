import React, { Component } from 'react';
import styled from 'styled-components'


const SingleSpell= styled.div`

width: 40vw;
/* display: flex;  */
/* justify-content: center; */
/* align-items: center; */
overflow: hidden;
`

class Spell2 extends Component {
    render() {
        return (
            <SingleSpell>
               <div> {this.props.spell.name}</div>
               <div> {this.props.spell.casting_time}</div>
               <div> {this.props.spell.characterId}</div>
               <div> Concentration: {this.props.spell.concentration}</div>
               <div> {this.props.spell.desc}</div>
               <div> Duration: {this.props.spell.duration}</div>
               <div> Range: {this.props.spell.range}</div>
               <div> Ritual: {this.props.spell.ritual}</div>
               
            </SingleSpell>
        );
    }
}

export default Spell2;