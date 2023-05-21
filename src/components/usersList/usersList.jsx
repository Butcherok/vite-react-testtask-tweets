import { animateScroll as scroll } from 'react-scroll';
import UserCard from '../userCard/userCard';
import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/usersApi';
import LoadMore from '../loadMore/loadMore';
import { ListItem } from '@mui/material';
import { centredItemsStyles } from '../../shared/basicStyles';
import { tweetsItemStyle } from '../userCard/userCardStyles';

function UserList() {
  const [cards, setCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      if (page === 1) {
        await fetchUsers(page)
          .then(newUsers => {
            setCards(newUsers);
          })
          .catch(error => console.log(error.message));
      } else {
        await fetchUsers(page)
          .then(data => {
            setCards(prevUsers => [...prevUsers, ...data]);
          })
          .catch(error => console.log(error.message));

        setTimeout(() => {
          scroll.scrollToBottom();
        }, 1000);
      }
    };
    getUsers();
  }, [page]);

  const loadMore = () => {
    setPage(prefState => prefState + 1);
  };

  return (
    <>
      <ul>
        {cards.map(({ id, avatar, tweets, followers, user, following }) => {
          return (
            <ListItem
              component="li"
              sx={{ ...centredItemsStyles, ...tweetsItemStyle }}
              key={id}
            >
              <UserCard
                id={id}
                avatar={avatar}
                tweets={tweets}
                followers={followers}
                user={user}
                following={following}
              />
            </ListItem>
          );
        })}
      </ul>
      <LoadMore cards={cards} loadMore={loadMore} />
    </>
  );
}

export default UserList;
