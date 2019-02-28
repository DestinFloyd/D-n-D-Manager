import React, { Component } from 'react';
import styled from 'styled-components'
import D12Background from './images/d12Background.png'

const Holder12 = styled.div`
background-image: url(${D12Background});
background-size:contain;
height: 40px; 
width: 40px;
display: flex; 
justify-content: center;
align-items: center;
`
class D12 extends Component {
    state = {
        result: '',

    }
    componentDidMount() {
        this.rollIt()
    }
    rollIt = () => {
        const roll = Math.floor(Math.random() * 12) + 1
        let swapping = this.state.result
        swapping = roll
        this.setState({ result: swapping })
    }

    render() {
        return (
            <Holder12>
                {this.state.result}
            </Holder12>
        );
    }
}
export default D12;