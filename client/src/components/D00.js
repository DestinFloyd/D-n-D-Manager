import React, { Component } from 'react';
import styled from 'styled-components'
import D10Background from './images/d10Background.jpg'

const Holder00 = styled.div`
background-image: url(${D10Background});
background-size:contain;
height: 40px; 
width: 40px;
display: flex; 
justify-content: center;
align-items: center;
`

class D00 extends Component {
    state = {
        result: '',

    }
    componentDidMount() {
        this.rollIt()
    }
    rollIt = () => {
        const roll = Math.floor(Math.random() * 10) + 1
        let swapping = this.state.result
        swapping = roll
        this.setState({ result: swapping })
    }

    render() {
        return (
            <Holder00>
                {this.state.result}0
            </Holder00>
        );
    }
}


export default D00;