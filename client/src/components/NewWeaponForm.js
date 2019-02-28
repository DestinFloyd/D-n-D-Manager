import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const MyButton = styled.button`
border-radius: 20%;
background-color: black;
color: white;
font-weight: bold;
padding: 1%;
`
class NewWeaponForm extends Component {
    state = {
        newWeapon:{ 
            name: '',
            damage: '',
            specialAffects:'',
            damageDetails:'',
            characterId: this.props.characterId
    
        }
    }

    handleChange = (event) => {
        const newWeapon = { ...this.state.newWeapon }
        console.log(newWeapon)
        newWeapon[event.target.name] = event.target.value
        this.setState({newWeapon: newWeapon })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newWeapon = this.state.newWeapon
        axios.post(`/api/p4/weapons/`, newWeapon)
        .then((res) => {
            this.props.toggleForm()
        })
    }

    render() {
        return (
            <div>
              
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            placeholder="Weapon Name"
                            name="name"
                            onChange={this.handleChange}
                        />
                         <input type="text"
                            placeholder="Damage"
                            name="damage"
                            onChange={this.handleChange}
                        />
                         <input type="text"
                            placeholder="Damage Details"
                            name="damageDetails"
                            onChange={this.handleChange}
                        />
                         <input type="text"
                            placeholder="Special Affects"
                            name="specialAffects"
                            onChange={this.handleChange}
                        />
   
                    </div>
                    <MyButton>Submit New Weapon</MyButton>
                </form>
            </div>
        );
    }
}

export default NewWeaponForm;