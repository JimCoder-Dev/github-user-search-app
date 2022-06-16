import GithubContext from '../context/GithubContext';

const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default githubReducer;
