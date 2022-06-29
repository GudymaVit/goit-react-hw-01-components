import propTypes from "prop-types";

const Profile = (props) => {
    const { username, tag, location, avatar, stats: { followers, views, likes } } = props;
    return (<div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
        <ul className="stats">
            <li>
                <span className="label">followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>)
};

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired
    }).isRequired,

};
export default Profile;