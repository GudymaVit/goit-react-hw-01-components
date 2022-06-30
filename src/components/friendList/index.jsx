import PropTypes from 'prop-types';
import styles from "./friends.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li className={styles.item} key={id}>
                    <span className={styles.status} style={isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}></span>
                    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{ name }</p>
                </li>
            ))}
        </ul>
    )
};

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}

export default FriendList;