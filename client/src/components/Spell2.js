import React, { Component } from 'react';

class Spell2 extends Component {
    render() {
        return (
            <div>
                {this.props.spell.name}
                {this.props.spell.casting_time}
                {this.props.spell.characterId}
                Concentration: {this.props.spell.concentration}
                {this.props.spell.desc}
                Duration: {this.props.spell.duration}
                Range: {this.props.spell.range}
                Ritual: {this.props.spell.ritual}
               
            </div>
        );
    }
}

export default Spell2;