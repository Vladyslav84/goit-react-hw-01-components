import React from 'react';
import defaultImg from './images/default-img.jpg';
import PropTypes from 'prop-types';
import s from '../css/Profile.module.css'
// console.log(s);
const Profile = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.profile}>
                <img className={s.profileImg}
                    src={props.avatar}
                    alt="Аватар пользователя"
                    width="280"
                />
                <p className={s.name}> {props.name}</p>
                <p className={s.tag}>@{props.tag}</p>
                <p className={s.location}> {props.location}</p>
                <ul className={s.stats}>
                    <li>
                        <span className="label">Followers </span><br />
                        <span className={s.quantity}>{props.profileFollowers}</span>
                    </li>
                    <li>
                        <span className="label">Views </span><br />
                        <span className={s.quantity}>{props.profileViews}</span>
                    </li>
                    <li>
                        <span className="label">Likes </span><br />
                        <span className={s.quantity}>{props.profileLikes}</span>
                    </li>
                </ul>
            </div>

        </div>
    )
};

Profile.defaultProps = {

    avatar: defaultImg,
};

Profile.propTypes = {

    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    profileFollowers: PropTypes.number.isRequired,
    profileViews: PropTypes.number.isRequired,
    profileLikes: PropTypes.number.isRequired,
};

export default Profile;