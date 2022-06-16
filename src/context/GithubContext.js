import { createContext, useReducer } from 'react';
import githubReducer from '../reducers/GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //const [user, setUser] = useState([]);

  const contextState = {
    user: [],
  };
  const [state, dispatch] = useReducer(githubReducer, contextState);

  const fetchUser = async (userName) => {
    const URL = `https://api.github.com/users/${userName}`;
    const response = await fetch(URL);

    const data = await response.json();
    console.log(data);
    dispatch({
      type: 'GET_USER',
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
