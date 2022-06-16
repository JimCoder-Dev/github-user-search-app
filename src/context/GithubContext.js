import { useState, createContext } from 'react';

const GithubContext = createContext();
const URL = 'https://api.github.com/users/octocat';

export const GithubProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const response = await fetch(URL);

    const data = await response.json();
    console.log(data);
    setUser(data);
  };

  return (
    <GithubContext.Provider
      value={{
        user,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
