import { useState, useContext } from 'react';
import GithubContext from '../context/GithubContext';
import AlertContext from '../context/AlertContext';
import Alert from './Alert';
function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const { mode, fetchUser } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  function handleChange(e) {
    setSearchText(e.target.value);
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (searchText === '') {
      setAlert('Enter a username', 'error');
    } else {
      //SORT SEARCH

      fetchUser(searchText);
      setSearchText('');
    }
  }
  return (
    <div className="container w-full flex flex-col justify-center mb-4">
      <form onSubmit={handleSubmit}>
        <div className="form-control ">
          <div class="relative input-group">
            <svg
              class="h-12 w-12 absolute ml-2 px-3 pr-2 blue-filter"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <label className="input-group">
              <input
                className={`${
                  mode ? 'bg-white ' : 'bg-navyDarkMode text-white'
                }font-xl w-full pl-16  input input-bordered rounded-lg `}
                type="text"
                placeholder="Search GitHub username..."
                value={searchText}
                onChange={handleChange}
              />
              <Alert />
              <button
                type="submit"
                className="btn text-white px-12 bg-primaryBlue hover:bg-hoverBlue"
              >
                Search
              </button>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
