import { Link } from 'react-router-dom';

export const CategoryItem = (props) => {
  const {
    strCategory = '',
    strCategoryThumb = '',
    strCategoryDescription = '',
  } = props;
  
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-title'>{strCategory}</div>

        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>

      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategoryThumb} />
      </div>

      <div className='card-action'>
        <Link className='btn brand-link' to={`/category/${strCategory}`}>
          Watch Category
        </Link>
      </div>
    </div>
  );
};
