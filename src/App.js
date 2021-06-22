import React from 'react';
import Profile from './components/Profile';
import profileUser from './profile.json';

const App = () => {
    return (
        <div>
            <Profile
                avatar={profileUser.avatar}
                name={profileUser.name}
                tag={profileUser.tag}
                location={profileUser.location}
                profileFollowers={profileUser.stats.followers}
                profileViews={profileUser.stats.views}
                profileLikes={profileUser.stats.likes}

            />
        </div>
    );
};

export default App;
