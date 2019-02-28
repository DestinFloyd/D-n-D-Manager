import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewCharacterForm from './NewCharacterForm'
import styled from 'styled-components'

const DeleteButton = styled.button`
border-radius: 20%;
background-color: red;
color: white;
font-weight: bold;
padding: 1%;
`
const MyButton = styled.button`
border-radius: 20%;
background-color: black;
color: white;
font-weight: bold;
padding: 1%;
`
const NameOfCharacter = styled.div`
font-size: 4em;
color: black;
`

class SingleUser extends Component {

    state = {
        info: {
            userId: '',
            name: '',
            characters: [{
                name: '',
            }],
            wantToDelete: false,
            newCharacterForm: false
        }
    }

    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const userId = this.props.userId
        axios.get(`/api/p4/users/${userId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ info: res.data })
            })

    }
    toggleDelete = () => {
        this.setState({ wantToDelete: !this.state.wantToDelete })
    }
    deleteUser = () => {
        axios.delete(`/api/p4/users/${this.props.userId}`)
        .then(()=>{this.props.home()}).then(()=>{this.props.getAll()})

      
         
    }
    toggleNewCharacter=()=>{
        this.setState({ newCharacterForm: !this.state.newCharacterForm })
    }


    render() {
        return (
            <div>
                
                <MyButton onClick={this.toggleNewCharacter}>New Character</MyButton>
                {this.state.newCharacterForm ? <NewCharacterForm toggleNewCharacter={this.toggleNewCharacter} userId={this.props.userId} getSingleUser={this.getSingleUser}/> : null}
                
                
                {this.state.info.characters.map((char, i) => (

                    <div key={i}>
                        <div>       
                            <Link to={`/my/${this.props.userId}/character/${char.characterId}`}>
                                <NameOfCharacter>{char.name}</NameOfCharacter>
                            </Link>
                        </div>
                    </div>

                ))}

<br/>

<DeleteButton onClick={this.toggleDelete}>Delete this user </ DeleteButton>
                {this.state.wantToDelete ?<DeleteButton onClick={this.deleteUser}>DELETE THIS USER AND CHARACTERS</DeleteButton> : null}
            </div>
        );
    }
}

export default SingleUser;