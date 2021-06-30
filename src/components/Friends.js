import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './images/default-img.jpg';
import s from '../css/Friends.module.css'

const FriendCard = (props) => (
    <>
        <span className="status"></span>
        <img className="avatar" src={props.avatar} alt={props.name} width="48" />
        <p className={s.name}>{props.name}</p>
    </>
)

FriendCard.defaultProps = {

    avatar: defaultImg,
};

FriendCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default FriendCard;