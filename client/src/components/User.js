import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class User extends Component {

    render() {
        return (
            <div>

                {this.props.users.map((user, i) => (

                    <div key={i}>
                        <div>  
                            <Link to={`/player/${user.userId}`}>
                                <div>{user.name}</div>
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
        );
    }
}

export default User;