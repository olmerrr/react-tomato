import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const goToMain = useNavigate();
  return (
    <div className='center'>
      <div className='err err-title'>404</div>
      <h2>Page Not Found</h2>
      <button className='btn go-back btn-big' onClick={()=> goToMain('/')}>To Main</button>
    </div>
  );
};
