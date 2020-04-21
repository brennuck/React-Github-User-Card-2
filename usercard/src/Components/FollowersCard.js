import React from 'react';

const FollowersCard = props => {
    console.log("FOLLOWERS PROPS", props)
    return(
        <div>
            {props.followers.map(follower => {
                return (
                    <div>
                        <img src={follower.avatar_url} alt="Picture" />
                        <h2> {follower.login} </h2>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;