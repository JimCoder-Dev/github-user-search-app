import { useState, useContext } from 'react';
import GithubContext from '../context/GithubContext';
import UserProfile from './UserProfile';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const { user, fetchUser } = useContext(GithubContext);
  function handleChange(e) {
    setSearchText(e.target.value);
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (searchText === '') {
      alert('SEARCH CANNOT BE EMPTY');
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
              class="h-12 w-12 left-0 pr-2 "
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

            <input
              className="w-full pr-40 input input-bordered"
              type="text"
              placeholder="Search…"
              value={searchText}
              onChange={handleChange}
            />
            <button type="submit" className="btn px-12 bg-primaryBlue">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
