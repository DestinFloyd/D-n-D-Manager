import React, { Component } from 'react';
import styled from 'styled-components'
import D10Background from './images/d10Background.jpg'

const Holder10 = styled.div`
background-image: url(${D10Background});
background-size:contain;
height: 40px; 
width: 40px;
display: flex; 
justify-content: center;
align-items: center;
`
class D10 extends Component {
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
            <Holder10>
                {this.state.result}
            </Holder10>
        );
    }
}
export default D10;