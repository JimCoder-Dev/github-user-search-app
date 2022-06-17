import Main from './components/Main';
import { GithubProvider } from './context/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Main />
    </GithubProvider>
  );
}

export default App;
