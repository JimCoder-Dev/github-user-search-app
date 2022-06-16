import { useEffect, useContext } from 'react';
import UserProfile from './UserProfile';
import GithubContext from '../context/GithubContext';

function SearchResult() {
  const { user, fetchUser } = useContext(GithubContext);

  useEffect(() => {
    fetchUser();
  }, []);
  if (user.message === 'Not Found') {
    return (
      <h1 className="text-red-500 text-center text-5xl">USER NOT FOUND!!!</h1>
    );
  } else {
    return <UserProfile user={user} />;
  }
}

export default SearchResult;
