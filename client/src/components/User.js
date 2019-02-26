import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm'
// import SingleUser from './SingleUser';

class User extends Component {
    state = {
        showUserForm: false,
        
    }
    toggleUserForm = () => {
        this.setState({ showUserForm: !this.state.showUserForm })
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleUserForm} getAll={this.props.getAll}>Add New User</button>
                {this.state.showUserForm ? <NewUserForm toggle={this.toggleUserForm} getAll={this.props.getAll} /> : null}
                {this.props.users.map((user, i) => (

                    <div key={i}>
                        <div>
                            <Link to={`/player/${user.userId}`} >
                           
                                <div key={i} >{user.name} </div>
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
        );
    }
}

export default User;