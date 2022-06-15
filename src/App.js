import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="container ">
      <Navbar />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
