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

class NewUserForm extends Component {
    state = {
        newUser: {
            name: ''
        }

    }
    handleChange = (event) => {
        const newUser = { ...this.state.newUser }
        console.log(newUser)
        newUser[event.target.name] = event.target.value
        this.setState({ newUser: newUser })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newUser = this.state.newUser
        axios.post(`/api/p4/users/`, newUser)
            .then((res) => {
                this.props.toggle()
                this.props.getAll()
            })
    }


    render() {
        return (
            <div>          
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        placeholder="User Name"
                        name="name"
                        onChange={this.handleChange}
                    />

                </div>
                <MyButton>Submit New User</MyButton>
            </form>

            </div>
        );
    }
}

export default NewUserForm;

