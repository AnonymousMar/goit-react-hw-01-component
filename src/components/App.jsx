import { Profile } from '../Profile'
import user from 'data/user';
import  Statistics  from '../Statistics';
import data from '../data/data'
import FriendList from '../FriendList';
import friendsData from '../data/friends.json';
import TransactionHistory from '../TransactionHistory';
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
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </>
  )
}

