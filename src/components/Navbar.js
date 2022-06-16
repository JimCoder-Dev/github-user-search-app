import { useState } from 'react';
import DarkLogo from './DarkLogo';
import LightLogo from './LightLogo';

function Navbar() {
  const [mode, setMode] = useState(false);

  function changeMode() {
    const currentMode = mode;
   
    setMode(!currentMode);
  }

  return (
    <div className="w-full h-20 flex justify-between items-center">
      <h1 className="text-2xl font-bold">devfinder</h1>
      <div className="flex">
        <button onClick={changeMode} className="flex">
          {mode === true ? <DarkLogo /> : <LightLogo />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
