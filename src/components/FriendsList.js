import React from "react";
import PropTypes, { string } from "prop-types";
import FriendCard from "./Friends";
import s from '../css/Friends.module.css'

const FriendsList = ({ friendsArray }) => (
    <div className={s.wrapper}>
         <ul className={s.friendsList}>
            {friendsArray.map((friend) => (
             <li key={friend.id} className={s.friendItem}>
             <span className={s.friendStatus} style = {{backgroundColor:friend.isOnline? 'green': 'red'}}></span>
                <FriendCard
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
