import React, { Component } from 'react';
import styled from 'styled-components'


const SingleSpell= styled.div`
width: 40vw;
overflow: hidden;
padding-top: 10%;
`
const SpellName= styled.div`
font-size: 1.5em;
`

class Spell2 extends Component {
    render() {
        return (
            <SingleSpell>
               <SpellName> {this.props.spell.name}</SpellName>
               <div> Casting Time: {this.props.spell.casting_time}</div>
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