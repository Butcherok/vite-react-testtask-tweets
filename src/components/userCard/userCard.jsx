import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { putUser } from '../../services/usersApi';
import { Avatar, Box, Button, Typography } from '@mui/material';
import {
  avatarBorderStyle,
  avatarBoxStyle,
  buttonActiveStyles,
  contentBoxStyle,
  dividerStyle,
  logoBoxStyle,
  logoStyle,
} from './userCardStyles';
import Logo from '../../assets/logo.svg';
import ImageBg from '../../assets/img-1.webp';
import {
  buttonStyles,
  centredItemsStyles,
  contentStyles,
} from '../../shared/basicStyles';

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
      <Box sx={logoBoxStyle}>
        <Box
          component="img"
          src={Logo}
          alt="Goit logo"
          width="76px"
          height="22px"
          loading="lazy"
          sx={logoStyle}
        />
        <Avatar
          src={ImageBg}
          alt={user}
          width="308"
          height="168"
          loading="lazy"
        />
      </Box>

      <Box sx={dividerStyle}>
        <Box sx={{ ...centredItemsStyles, ...avatarBorderStyle }}>
          <Box sx={avatarBoxStyle}>
            <img
              src={userAvatar}
              alt={user}
              width="62"
              height="62"
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ ...centredItemsStyles, ...contentBoxStyle }}>
        <Typography sx={{ ...contentStyles, color: 'primary.darker' }}>
          {name}
        </Typography>
        <Typography sx={contentStyles}>
          {normalizeNumber(tweets)} tweets
        </Typography>
        <Typography sx={contentStyles}>
          {normalizeNumber(getFollowers)} followers
        </Typography>
      </Box>

      <Button
        onClick={handleClick}
        data-follow={getFollowing}
        variant="contained"
        sx={{ ...buttonStyles, ...(getFollowing && { ...buttonActiveStyles }) }}
      >
        {!getFollowing ? 'follow' : 'following'}
      </Button>
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
