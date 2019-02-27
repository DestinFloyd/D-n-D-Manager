import React, { Component } from 'react';

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
            <div>
                {this.state.result}
            </div>
        );
    }
}

export default D8;