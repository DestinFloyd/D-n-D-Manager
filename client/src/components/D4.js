import React, { Component } from 'react';
import styled from 'styled-components'
import D4Background from './images/d4Background.png'

const Holder4 = styled.div`
background-image: url(${D4Background});
background-size:contain;
height: 40px; 
width: 40px;
display: flex; 
justify-content: center;
align-items: center;
`

class D4 extends Component {
    state = {
        result: '',

    }
    componentDidMount() {
        this.rollIt()
    }
    rollIt = () => {
        const roll = Math.floor(Math.random() * 4) + 1
        let swapping = this.state.result
        swapping = roll
        this.setState({ result: swapping })
    }

    render() {
        return (
            <Holder4>
                {this.state.result}
            </Holder4>
        );
    }
}

export default D4;