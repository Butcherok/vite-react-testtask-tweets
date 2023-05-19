import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import UserCard from '../userCard/userCard';

function UserList() {
  const users = useSelector(selectUsers);

  return (
    <>
      <ul>
        {users.map(({ id, avatar, tweets, followers, user }) => {
          return (
            <li key={id}>
              <UserCard
                avatar={avatar}
                tweets={tweets}
                followers={followers}
                user={user}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserList;
