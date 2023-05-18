import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import { putUser } from '../../redux/usersApi';

function UserList() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {users.map(({ id, avatar, tweets, followers, user }) => {
          return (
            <li key={id}>
              <img src={avatar} alt={user} />
              <p>{user}</p>
              <p>Tweets: {tweets}</p>
              <p>Followers: {followers}</p>
              <button type="button" onClick={() => dispatch(putUser())}>
                Follow
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserList;
