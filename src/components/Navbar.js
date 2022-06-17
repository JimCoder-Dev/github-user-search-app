import { useContext } from 'react';
import DarkLogo from './DarkLogo';
import LightLogo from './LightLogo';

import GithubContext from '../context/GithubContext';

function Navbar() {
  //const [mode, setMode] = useState(false);
  const { mode, setMode } = useContext(GithubContext);
  function changeMode() {
    const currentMode = mode;

    setMode(!currentMode);
  }

  return (
    <div className="w-full h-20 flex justify-between items-center">
      <h1
        className={`${
          mode ? 'text-fontBlack' : 'text-white'
        } text-2xl font-bold`}
      >
        devfinder
      </h1>
      <div className="flex">
        <button onClick={changeMode} className="flex">
          {mode ? <DarkLogo /> : <LightLogo />}
        </button>
      </div>
    </div>
  );
}
export default Navbar;
