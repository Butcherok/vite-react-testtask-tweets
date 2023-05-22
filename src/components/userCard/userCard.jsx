import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { putUser } from '../../services/usersApi';
import { Box, Button, Typography } from '@mui/material';
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

function UserCard({ avatar, tweets, followers, user, id }) {
  const loadFromStorage = key => {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  };

  const isFollowing = loadFromStorage(`tweet_id${id}`) === true;

  const [getFollowers, setGetFollowers] = useState(followers);

  const userAvatar = useMemo(() => `${avatar}?${Math.random()}`, [avatar]);

  const normalizeNumber = number => number.toLocaleString('en-US');

  const handleClick = () => {
    const currentCard = {
      id,
      tweets,
      avatar,
      user,
      followers: setGetFollowers(prev =>
        isFollowing ? (prev -= 1) : (prev += 1)
      ),
    };

    putUser(currentCard.id, getFollowers);
    
    const serializedState = JSON.stringify(isFollowing ? false : true);
    localStorage.setItem(`tweet_id${id}`, serializedState);
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
        <img src={ImageBg} alt={user} width="308" height="168" loading="lazy" />
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
          {user}
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
        data-follow={isFollowing}
        variant="contained"
        sx={{ ...buttonStyles, ...(isFollowing && { ...buttonActiveStyles }) }}
      >
        {!isFollowing ? 'follow' : 'following'}
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
  avatar: PropTypes.string.isRequired,
};
