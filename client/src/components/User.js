import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class User extends Component {

    render() {
        return (
            <div>

<p>Hey im user </p>
{this.props.users.map((user, i) => (

<div key={i}>
    <div>
        <div>{user.name}</div>
        {/* <Link to={`/all/${user._id}`}> */}
        {/* <div>{user.name}</div> */}
        {/* </Link> */}
    </div>
</div>

))}
            </div>
        );
    }
}

export default User;