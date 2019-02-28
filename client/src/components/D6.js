import React, { Component } from 'react';
import styled from 'styled-components'
import D6Background from './images/d6Background.png'

const Holder6 = styled.div`
background-image: url(${D6Background});
background-size:contain;
height: 40px; 
width: 40px;
display: flex; 
justify-content: center;
align-items: center;
`
class D6 extends Component {
    state = {
        result: '',

    }
    componentDidMount() {
        this.rollIt()
    }
    rollIt = () => {
        const roll = Math.floor(Math.random() * 6) + 1
        let swapping = this.state.result
        swapping = roll
        this.setState({ result: swapping })
    }

    render() {
        return (
            <Holder6>
                {this.state.result}
            </Holder6>
        );
    }
}

export default D6;