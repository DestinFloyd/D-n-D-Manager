import React, { Component } from 'react';
import styled from 'styled-components'
import D20Background from './images/d20Background.jpg'

const Holder20 = styled.div`
background-image: url(${D20Background});
background-size:contain;
height: 40px; 
width: 40px;
display: flex; 
justify-content: center;
align-items: center;
`

class D20 extends Component {
    state = {
        result: '',

    }
    componentDidMount() {
        this.rollIt()
    }

    rollIt = () => {
        const roll = Math.floor(Math.random() * 20) + 1
        let swapping = this.state.result
        swapping = roll
        this.setState({ result: swapping })
    }

    render() {
        return (
            <Holder20>
                
                {this.state.result}
            </Holder20>
        );
    }
}

export default D20;