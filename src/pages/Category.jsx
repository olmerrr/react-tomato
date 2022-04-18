import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList/MealList';
import { Loader } from '../layout/Loader/Loader';

export const Category = () => {
  const goBack = useNavigate();
  const [meals, setMeals] = useState([]);

  const { name } = useParams();
  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      {!meals.length ? (
        <Loader />
      ) : (
        <>
          <button className='btn go-back' onClick={() => goBack(-1)}>
            Back
          </button>
          <MealList meals={meals} />
        </>
      )}
    </>
  );
};
