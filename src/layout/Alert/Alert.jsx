import { useEffect, useContext } from 'react';
import { ShopContext } from '../../context';

import './Alert.css';

export const Alert = () => {
  const {alertName: name = '', closeAlert = Function.prototype} = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    //  eslint-disable-next-line
  }, [name]);

  return (
    <div id='toast-continer' className='toast-continer'>
      <div className='toast'>{name} added to Cart</div>
    </div>
  );
};
