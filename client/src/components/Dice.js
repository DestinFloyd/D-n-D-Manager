import React, { Component } from 'react';
import D20 from './D20';
import D12 from './D12';
import D10 from './D10';
import D00 from './D00'
import D8 from './D8';
import D6 from './D6';
import D4 from './D4';

class Dice extends Component {
    state = {

        twelve: <D12 />,
        set: []

    }
    addToSet = (die) => {
        let bag = this.state.set
        console.log(typeof bag)
        console.log(bag)
        bag.push(die)
       
        this.setState({ set: bag })
    }
  
    render() {
        return (
            <div>
                Im the dice Component
                <button onClick={() => { this.addToSet(<D20 />) }}>Add 20</button>
                <button onClick={() => { this.addToSet(<D00 />) }}>Add 00</button>
                <button onClick={() => { this.addToSet(<D12 />) }}>Add 12</button>
                <button onClick={() => { this.addToSet(<D10 />) }}>Add 10</button>
                <button onClick={() => { this.addToSet(<D8 />) }}>Add 8</button>   
                <button onClick={() => { this.addToSet(<D6 />) }}>Add 6</button>
                <button onClick={() => { this.addToSet(<D4 />) }}>Add 4</button>   
                
                {this.state.set.map((die, i) => (

                    <div key={i}>
                        <div>
                            {die}
                        </div>
                    </div>

                ))}


             
                <D12 />
                <D10 />
                <D00 />
                <D8 />
                <D6 />
                <D4 />
            </div>
        );
    }
}

export default Dice;