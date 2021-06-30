import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './images/default-img.jpg';

const FriendCard = (props) => (
    <div>
        <span className="status"></span>
        <img className="avatar" src={props.avatar} alt={props.name} width="48" />
        <p className="name">{props.name}</p>
    </div>
)

FriendCard.defaultProps = {

    avatar: defaultImg,
};

FriendCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default FriendCard;