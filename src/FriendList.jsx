import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import  './friend.css';

export default function FriendList({ friends }) {
    return (
        <ul className='FriendList'>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                );
            })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};