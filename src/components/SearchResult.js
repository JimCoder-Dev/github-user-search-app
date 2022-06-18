import { useContext } from 'react';
import UserProfile from './UserProfile';
import GithubContext from '../context/GithubContext';
import AlertContext from '../context/AlertContext';

function SearchResult() {
  const { user, fetchUser } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  console.log(user);
  if (user.message === 'Not Found') {
    setAlert('No results');
  } else if (user.length === 0) {
    fetchUser('octocat');
    return <UserProfile user={user} />;
  } else {
    return <UserProfile user={user} />;
  }

  // //TESTING USER RETRIVING
  // // useEffect(() => {
  // //   fetchUser('octocat');
  // // }, []);
}

export default SearchResult;
