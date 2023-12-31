import { Profile } from './Profile/Profile'
import user from 'data/user';
import  Statistics   from './Statistics/Statistics';
import data from '../data/data.json'
import friends from '../data/friends.json';
import { FriendList } from './Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionData from '../data/transactions.json';
export const App = () => {
  return (
    <>
      < Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactionData} />
    </>
  )
}