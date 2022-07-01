import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendsListItem = ({ friend }) => (
  <li className={styles.item}>
    <span
      className={styles.status}
      style={
        friend.isOnline
          ? { backgroundColor: 'green' }
          : { backgroundColor: 'red' }
      }
    ></span>
    <img
      className={styles.avatar}
      src={friend.avatar}
      alt="User avatar"
      width="48"
    />
    <p className={styles.name}>{friend.name}</p>
  </li>
);

FriendsListItem.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendsListItem;
