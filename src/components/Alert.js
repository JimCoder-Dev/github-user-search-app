import { useContext } from 'react';
import AlertContext from '../context/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className=" text-red-500 absolute right-44 pt-3 font-semibold">
        {alert.msg}
      </div>
    )
  );
}

export default Alert;
