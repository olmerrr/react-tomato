import { Link } from 'react-router-dom';

export const CategoryItem = (props) => {
  const {
    idCategory = '',
    strCategory = '',
    strCategoryThumb = '',
    strCategoryDescription = '',
  } = props;
  return (
    <div className='card'>
      {/* <span>{idCategory}</span> */}
      <div className='card-content'>
        <div className='card-title'>{strCategory}</div>

        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>

      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategoryThumb} />
      </div>

      <div className='card-action'>
        <Link className='btn' to={`/category/${idCategory}`}>
          Watch Category
        </Link>
      </div>
    </div>
  );
};
