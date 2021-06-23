import React from "react";
import PropTypes from "prop-types";
import FriendCard from "./Friends";

const FriendsList = ({ friendsArray }) => (
    <ul>
        {friendsArray.map((friend) => (
            <li key={friend.id} className="item">
                <FriendCard
                    avatar={friend.avatar}
                    name={friend.name}

                />
            </li>
        )
        )}
    </ul>
)
FriendsList.propTypes = {
    friendsArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
}

export default FriendsList;