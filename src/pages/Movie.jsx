import { useParams, useNavigate } from 'react-router-dom';

export const Movie = () => {
  const { title } = useParams();
  const  goBack  = useNavigate();


  return <div>
    movie {title}
    <div>
    <button 
      className='btn'
      onClick={() => goBack(-1)}
      >
      Go back
    </button>


    </div>
  
    </div>;
};
