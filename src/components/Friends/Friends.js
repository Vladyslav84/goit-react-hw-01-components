import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../images/default-img.jpg';


const FriendListItem = (props) => (
    <>
        <span className="status"></span>
        <img className="avatar" src={props.avatar} alt={props.name} width="48" />
        <p style={{ marginLeft: '10px' }} >{props.name}</p>
    </>
)

FriendListItem.defaultProps = {

    avatar: defaultImg,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;