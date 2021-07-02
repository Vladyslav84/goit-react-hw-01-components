import React from 'react';
import defaultImg from '../images/default-img.jpg';
import PropTypes from 'prop-types';
import s from './Profile.module.css'

// import profileUser from '../../../src/profile.json';

// console.log(profileUser.stats.followers);

const Profile = ({ avatar, name, tag, location, stats }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.profile}>
                <img className={s.profileImg}
                    src={avatar}
                    alt="Аватар пользователя"
                    width="280"
                />
                <p className={s.name}> {name}</p>
                <p className={s.tag}>{tag}</p>
                <p className={s.location}> {location}</p>

                <ul className={s.stats}>
                    <li>
                        <span className="label">Followers </span><br />
                        <span className={s.quantity}>{stats.followers}</span>
                    </li>
                    <li>
                        <span className="label">Views </span><br />
                        <span className={s.quantity}>{stats.views}</span>
                    </li>
                    <li>
                        <span className="label">Likes </span><br />
                        <span className={s.quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>

        </div>
    )
};
Profile.propTypes = {

    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        views: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

Profile.defaultProps = {

    avatar: defaultImg,
};

export { Profile };
