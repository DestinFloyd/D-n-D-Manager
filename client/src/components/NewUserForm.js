import React, { Component } from 'react';
import axios from 'axios'

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
                Im a form           
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        placeholder="User Name"
                        name="name"
                        onChange={this.handleChange}
                    />

                </div>
                <button>Submit New User</button>
            </form>

            </div>
        );
    }
}

export default NewUserForm;

