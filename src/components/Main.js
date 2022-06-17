import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResult';
import { useContext } from 'react';
import GithubContext from '../context/GithubContext';

function Main() {
  const { mode } = useContext(GithubContext);

  const bgColor = mode
    ? 'bg-veryLightGrayLM main-container'
    : 'bg-blackDarkM main-container';

  return (
    <div className={bgColor}>
      <div className="container mx-auto max-w-3xl">
        <Navbar />
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}

export default Main;
