import React, { Component } from 'react';
import styled from 'styled-components'
import D8Background from './images/d8Background.png'

const Holder8 = styled.div`
background-image: url(${D8Background});
background-size:contain;
height: 40px; 
width: 40px;
display: flex; 
justify-content: center;
align-items: center;
`
class D8 extends Component {
    state = {
        result: '',

    }
    componentDidMount() {
        this.rollIt()
    }
    rollIt = () => {
        const roll = Math.floor(Math.random() * 8) + 1
        let swapping = this.state.result
        swapping = roll
        this.setState({ result: swapping })
    }

    render() {
        return (
            <Holder8>
                {this.state.result}
            </Holder8>
        );
    }
}

export default D8;