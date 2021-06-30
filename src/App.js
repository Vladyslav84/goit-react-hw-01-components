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
const backGround = ["green","blue","gray","yellow","orange","purple","pink"];
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
                <div className={s.mainSection}>
                      <h2 className={s.title}>Upload stats</h2>
                <ul className={s.statList}>
                    {statisticalData.map((statData) => (
                        <li key={statData.id} className={s.item} style={{ backgroundColor: true ? backGround[Math.floor(Math.random() * backGround.length)]: 'teal'}}>
                            <Statistics
                                id={statData.id}
                                title={statData.title}
                                label={statData.label}
                                percentage={statData.percentage}
                            />

                        </li>
                    ))}

                </ul>
              </div>
            </section>

            <FriendsList friendsArray={friendsData} />
            <TransactionHistory transactionArray={transactions} />
        </div>
    );
};


export default App;