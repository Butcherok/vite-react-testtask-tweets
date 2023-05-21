import { animateScroll as scroll } from 'react-scroll';
import UserCard from '../userCard/userCard';
import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/usersApi';

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
            <li key={id}>
              <UserCard
                id={id}
                avatar={avatar}
                tweets={tweets}
                followers={followers}
                user={user}
                following={following}
              />
            </li>
          );
        })}
      </ul>
      <button type="button" disabled={!cards.length} onClick={loadMore}>
        Load More
      </button>
    </>
  );
}

export default UserList;
