import React, { Component } from 'react';

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
            <div>
                {this.state.result}
            </div>
        );
    }
}
export default D12;