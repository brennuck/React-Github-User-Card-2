import React from 'react';

const UserCard = props => {
    console.log("PROPS", props)
    return (
        <div>
            <img src={props.users.avatar_url} alt="Picture" />
            <h2> {props.users.name} </h2>
            <p> {props.users.bio} </p>
            <h4> {props.users.blog} </h4>
        </div>
    )
}

export default UserCard;