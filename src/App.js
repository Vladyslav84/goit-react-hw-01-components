import React from 'react';
import { Profile } from './components/Profile/Profile';
import profileUser from './profile.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendsList from './components/Friends/FriendsList';
import friendsData from './friends.json';
import TransactionHistory from './components/Transactions/TableHead';
import transactions from './transactions.json';

const App = () => {
    return (
        <div>
            <Profile
                avatar={profileUser.avatar}
                name={profileUser.name}
                tag={profileUser.tag}
                location={profileUser.location}
                stats={profileUser.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendsList friendsArray={friendsData} />
            <TransactionHistory transactionArray={transactions} />
        </div>
    );
};


export default App;

