import React, { Component } from 'react';

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
            <div>
                
                {this.state.result}
            </div>
        );
    }
}

export default D20;