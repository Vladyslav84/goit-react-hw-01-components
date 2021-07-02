import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../Friends/Friends";
import s from './Friends.module.css'

const FriendsList = ({ friendsArray }) => (
    <div className={s.wrapper}>
        <ul className={s.friendsList}>
            {friendsArray.map((friend) => (
                <li key={friend.id} className={s.friendItem}>
                    <span className={s.friendStatus} style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }} />
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        status={friend.isOnline}

                    />
                </li>
            )
            )}
        </ul>
    </div>
)
FriendsList.propTypes = {
    friendsArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
}

export default FriendsList;
