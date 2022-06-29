import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li className="item" key={id}>
                    <span className="status" style={isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}></span>
                    <img className="avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="name">{ name }</p>
                </li>
            ))}
        </ul>
    )
};

FriendList.prototype = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired
        }).isRequired
    ).isRequired
}

export default FriendList;