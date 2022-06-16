import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResult';
import { GithubProvider } from './context/GithubContext';

function App() {
  return (
    <GithubProvider>
      <div className="container mx-auto max-w-3xl">
        <Navbar />
        <SearchBar />
        <SearchResults />
      </div>
    </GithubProvider>
  );
}

export default App;
