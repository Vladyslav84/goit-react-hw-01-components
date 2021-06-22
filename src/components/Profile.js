import React from 'react';

const Profile = (props) => {

    return (
        <div className="profile">
            <div className="description">
                <img
                    src={props.avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                    width="280"
                />
                <p className="name">Name: {props.name}</p>
                <p className="tag">@tag: {props.tag}</p>
                <p className="location">location: {props.location}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{props.profileFollowers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{props.profileViews}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{props.profileLikes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;