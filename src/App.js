import React from 'react';
import Profile from './components/Profile';
import profileUser from './profile.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';
import FriendsList from './components/FriendsList';
import friendsData from './friends.json';
import TransactionHistory from './components/TableHead';
import transactions from './transactions.json';
import s from './css/Statistics.module.css'

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
            <section className={s.wrapper}>
                <h2 className="title">Upload stats</h2>
                <ul className="stat-list">
                    {statisticalData.map((statData) => (
                        <li key={statData.id} className="item">
                            <Statistics
                                id={statData.id}
                                title={statData.title}
                                label={statData.label}
                                percentage={statData.percentage}
                            />

                        </li>
                    ))}

                </ul>
            </section>

            <FriendsList friendsArray={friendsData} />
            <TransactionHistory transactionArray={transactions} />
        </div>
    );
};


export default App;