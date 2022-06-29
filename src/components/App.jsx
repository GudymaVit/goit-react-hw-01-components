import Profile from "./profile";
import userData from "../components/data/user";
import Statistics from "./statistics";
import userStat from "../components/data/data";
import FriendList from "./friendList";
import userFriends from "../components/data/friends";
import TransactionHistory from "./transactionHistory";
import userTrasaction from "../components/data/transactions";


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
      <TransactionHistory items={ userTrasaction} />
    </>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
