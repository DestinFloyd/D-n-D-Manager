import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class SingleUser extends Component {

    state = {
        info: {
            userId: '',
            name: '',
            characters: [{
                name: '',

            }]


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


    render() {
        return (
            <div>

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