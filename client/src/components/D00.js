import React, { Component } from 'react';

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
            <div>
                {this.state.result}0
            </div>
        );
    }
}


export default D00;