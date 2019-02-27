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
                <button onClick={this.toggleDelete}>Delete this user</button>
                {this.state.wantToDelete ?<button onClick={this.deleteUser}>DELETE THIS USER AND CHARACTERS</button> : null}
                <button onClick={this.toggleNewCharacter}>New Character</button>
                {this.state.newCharacterForm ? <NewCharacterForm toggleNewCharacter={this.toggleNewCharacter} userId={this.props.userId} getSingleUser={this.getSingleUser}/> : null}
                <p>  Im a single users :)  </p>
                
                {this.state.info.characters.map((char, i) => (

                    <div key={i}>
                        <div>       
                            <Link to={`/my/${this.props.userId}/character/${char.characterId}`}>
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