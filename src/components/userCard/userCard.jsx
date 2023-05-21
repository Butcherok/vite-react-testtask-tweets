import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { putUser } from '../../services/usersApi';

function UserCard({ avatar, tweets, followers, user, following, id }) {
  const [card, setCard] = useState([]);
  const [cardId, setCardId] = useState(id);
  const [getFollowing, setGetFollowing] = useState(following);
  const [getFollowers, setGetFollowers] = useState(followers);

  const userAvatar = useMemo(() => `${avatar}?${Math.random()}`, [avatar]);

  const normalizeNumber = number => number.toLocaleString('en-US');

  const handleClick = () => {
    setCardId(id);
    getFollowing ? setGetFollowing(false) : setGetFollowing(true);

    getFollowing
      ? setGetFollowers(prev => prev - 1)
      : setGetFollowers(prev => prev + 1);
    putUser(cardId, { followers: getFollowers, following: getFollowing })
      .then(getUser => setCard(getUser))
      .catch(error => console.log(error.message));
    console.log(card);
  };

  return (
    <>
      
      <img src={userAvatar} alt={user} />
      <p>{user}</p>
      <p>Tweets: {normalizeNumber(tweets)}</p>
      <p>Followers: {normalizeNumber(getFollowers)}</p>
      <button type="button" onClick={handleClick}>
        {!getFollowing ? 'follow' : 'following'}
      </button>
    </>
  );
}

export default UserCard;

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
