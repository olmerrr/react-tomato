import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList/MealList';
import { Loader } from '../layout/Loader/Loader';

export const Category = () => {
  const [meals, setMeals] = useState([]);

  const { name } = useParams();
  useEffect(() => {
    getFilteredCategory(name).then(data => setMeals(data.meals));
  }, [name]);

  return <>
    {
      !meals.length ? <Loader/> 
      : <MealList meals={meals}/>
    }
  </>;
};
