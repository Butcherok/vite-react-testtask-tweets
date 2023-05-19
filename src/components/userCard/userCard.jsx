import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

function UserCard({ avatar, tweets, followers, user }) {
  const [following, setFollowing] = useState(false);
  const [getFollowers, setGetFollowers] = useState(followers);
  const userAvatar = useMemo(() => `${avatar}?${Math.random()}`, [avatar]);

  const normalizeNumber = number => number.toLocaleString('en-US');

  const handleClick = () => {
    if (!following) {
      setGetFollowers(followers => followers + 1);
      setFollowing(true);
    } else {
      setGetFollowers(followers => followers - 1);
      setFollowing(false);
    }
  };

  return (
    <>
      <img src={userAvatar} alt={user} />
      <p>{user}</p>
      <p>Tweets: {normalizeNumber(tweets)}</p>
      <p>Followers: {normalizeNumber(getFollowers)}</p>
      <button type="button" onClick={handleClick}>
        {!following && <span> follow</span>}
        {following && <span> following</span>}
      </button>
    </>
  );
}

export default UserCard;

UserCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
};
