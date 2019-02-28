import React, { Component } from 'react';
import D20 from './D20';
import D12 from './D12';
import D10 from './D10';
import D00 from './D00'
import D8 from './D8';
import D6 from './D6';
import D4 from './D4';
import styled from 'styled-components'

const BagBox = styled.div`
width: 100vw;

`
const Bag = styled.div`
display: flex;

`
const Bag2 = styled.div`
display: flex;
flex-wrap: wrap;
`
const HoldingDice = styled.div`
padding: 10px;
`
const HoldingResults = styled.div`
padding: 10px;

`

class Dice extends Component {
    state = {
        set: [],
        dice: []
    }
    addToSet = (die) => {
        let bag = this.state.set
        bag.push(die)
        this.setState({ set: bag })
    }

    eraseSet = () => {
        const empty = ['']
        let itNow = { ...this.state.dice }
        itNow = empty
        this.setState({ dice: itNow })

    }
    emptyBag = () => {
        const empty = ['']
        let itNow = { ...this.state.set }
        itNow = empty
        this.setState({ set: itNow })

    }
    loopNGo = () => {


        let bag = this.state.dice
        let set = this.state.set
        set.map((one) => {
            if (one === 20) {
                bag.push(<D20 />)
            } else if (one === 12) {
                bag.push(<D12 />)
            } else if (one === "00") {
                bag.push(<D00 />)
            } else if (one === 10) {
                bag.push(<D10 />)
            } else if (one === 8) {
                bag.push(<D8 />)
            } else if (one === 6) {
                bag.push(<D6 />)
            } else if (one === 4) {
                bag.push(<D4 />)
            }

            this.setState({ dice: bag })

            return "done"

        })
    }

    render() {

        return (
            <BagBox>

                <button onClick={() => { this.addToSet(20) }} > Add 20</button>
                <button onClick={() => { this.addToSet("00") }}>Add 00</button>
                <button onClick={() => { this.addToSet(12) }}>Add 12</button>
                <button onClick={() => { this.addToSet(10) }}>Add 10</button>
                <button onClick={() => { this.addToSet(8) }}>Add 8</button>
                <button onClick={() => { this.addToSet(6) }}>Add 6</button>
                <button onClick={() => { this.addToSet(4) }}>Add 4</button>
                <button onClick={this.loopNGo}> ReRoll </button>
                <button onClick={this.emptyBag}>Empty Bag</button>
                <button onClick={this.eraseSet}> Erase Rolls</button>
                <br />

                <Bag>
                    Your bag has:
                {this.state.set.map((die, i) => (

                        <HoldingDice key={i}>
                            <div>

                                {die}
                            </div>
                        </HoldingDice>

                    ))}
                </Bag>
<Bag2>
                {this.state.dice.map((die, i) => (
                    <HoldingResults key={i}>
                        <div>
                            {die}
                        </div>
                    </HoldingResults>

                ))}

</Bag2>
            </BagBox>
        );
    }
}

export default Dice;