import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm'
import styled from 'styled-components'
import bookStack from './images/bookStack.jpg'

const UserBox = styled.div`
height: 100vh;
width: 100vw;
background-image: url(${bookStack});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
overflow-x: hidden;
`
const MyButton = styled.button`
border-radius: 20%;
background-color: black;
color: white;
font-weight: bold;
padding: 1%;
`

const UserNames = styled.div`
display:flex; 
padding-left: 10%;
font-size: 2em;
&:hover {
   text-shadow: 2px 2px white;
}
`
const LinkName = styled.div`
text-decoration: none;
color: black;

`



class User extends Component {
    state = {
        showUserForm: false,

    }
    toggleUserForm = () => {
        this.setState({ showUserForm: !this.state.showUserForm })
    }

    render() {
        return (
            <UserBox>
                <MyButton onClick={this.toggleUserForm} getAll={this.props.getAll}>Add New User</MyButton>
                {this.state.showUserForm ? <NewUserForm toggle={this.toggleUserForm} getAll={this.props.getAll} /> : null}
                {this.props.users.map((user, i) => (

                    <UserNames key={i}>
                         <div>
                            <Link to={`/player/${user.userId}`} >

                                <LinkName key={i} >{user.name} </LinkName>
                            </Link>

                        </div>
                    </UserNames>

                ))}
            </UserBox>
        );
    }
}

export default User;