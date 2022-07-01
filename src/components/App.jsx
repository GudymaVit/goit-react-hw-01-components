import Profile from './profile';
import userData from 'data/user';
import Statistics from './statistics';
import userStat from 'data/data';
import FriendList from './friendList';
import userFriends from 'data/friends';
import TransactionHistory from './transactionHistory';
import userTrasaction from 'data/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={userStat} />
      <FriendList friends={userFriends} />
      <TransactionHistory items={userTrasaction} />
    </>
  );
};
