import React from 'react';
import Profile from './components/Profile';
import profileUser from './profile.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';

// console.log(Statistics)

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
            <ul>
                {statisticalData.map((statData) => (
                    <li key = {statData.id}>
                    <Statistics
                      id = {statData.id}
                     title={statData.title}
                      label={statData.label}
                     percentage = {statData.percentage}
                    />

                </li>
            ))}
                
</ul>
        </div>
            );
};


export default App;