import Main from './components/Main';
import { GithubProvider } from './context/GithubContext';
import { AlertProvider } from './context/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Main />
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
