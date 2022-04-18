import { Link } from "react-router-dom";

export const MealItem = (props) => {
  const { strMeal = '', idMeal = '', strMealThumb = '' } = props;
  return (
      <div className='card'>
      <div className='card-content'>
        <div className='card-title'>{strMeal}</div>

  
      </div>

      <div className='card-image'>
        <img src={strMealThumb} alt={strMeal} />
      </div>

      <div className='card-action'>
        <Link className='btn brand-link' to={`/meal/${idMeal}`}>
          Watch Recipe
        </Link>
      </div>
    </div>
  );
};
