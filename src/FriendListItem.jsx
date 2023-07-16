import PropTypes from 'prop-types';

import  './friendListItem.css';

export default function FriendListItem({ avatar, name, isOnline = false }) {
    return (
        <li className='friendListItem'>
            <span className={'isOnline ? statusOnline : statusOffline'}></span>
            <img
                className='avatar'
                src={avatar}
                alt={name}
                width="48"
                height="48"
            />
            <p className='name'>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

