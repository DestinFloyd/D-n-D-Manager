import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewCharacterForm from './NewCharacterForm'

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
        const userId = this.props.match.params.userId
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
        axios.delete(`/api/p4/users/${this.props.match.params.userId}`)
        .then(()=>{this.props.history.goBack()})
        // window.location
         
    }
    toggleNewCharacter=()=>{
        this.setState({ newCharacterForm: !this.state.newCharacterForm })
    }


    render() {
        return (
            <div>
                <button onClick={this.toggleDelete}>Delete this user</button>
                {this.state.wantToDelete ? <button onClick={this.deleteUser}>DELETE THIS USER AND CHARACTERS</button> : null}
               
                <button onClick={this.toggleNewCharacter}>New Character</button>
                {this.state.newCharacterForm ? <NewCharacterForm /> : null}
                <p>  Im a single users :)  </p>
                {this.state.info.characters.map((char, i) => (

                    <div key={i}>
                        <div>
                            <Link to={`/my/${this.props.match.params.userId}/character/${char.characterId}`}>
                                <div>{char.name}</div>
                            </Link>
                        </div>
                    </div>

                ))}




            </div>
        );
    }
}

export default SingleUser;