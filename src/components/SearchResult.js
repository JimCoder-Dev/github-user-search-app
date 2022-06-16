import { useContext } from 'react';
import UserProfile from './UserProfile';
import GithubContext from '../context/GithubContext';

function SearchResult() {
  const { user } = useContext(GithubContext);

  console.log(user);
  if (user.message === 'Not Found') {
    return (
      <h1 className="text-red-500 text-center text-5xl">USER NOT FOUND!!!</h1>
    );
  } else if (user.length === 0) {
    return (
      <h1 className="text-center text-4xl">Search for a user on Github</h1>
    );
  } else {
    return <UserProfile user={user} />;
  }

  // //TESTING USER RETRIVING
  // // useEffect(() => {
  // //   fetchUser('octocat');
  // // }, []);
}

export default SearchResult;
