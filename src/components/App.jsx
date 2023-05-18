import { useDispatch, useSelector } from 'react-redux';
import UserList from './usersList/usersList';
import { selectError } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/usersApi';

function App() {
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    if (error) {
      console.log(error);
      // alert.error(error);
    }
  }, [dispatch, error]);

  return (
    <>
      <h1>users</h1>
      <UserList />
    </>
  );
}

export default App;
