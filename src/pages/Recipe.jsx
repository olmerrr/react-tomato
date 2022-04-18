import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Loader } from '../layout/Loader/Loader';

export const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const goBack = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <div>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <>
          <div className='card recipe'>
            <div className='card-image'>
              <img src={recipe.strMealThumb} alt='recipe.strMeal' />
            </div>

            <div className='content-recipe'>
              <h1>Name {recipe.strMeal}</h1>
              <div className='category'>Category {recipe.strCategory}</div>
              {recipe.strArea ? <h6>Area {recipe.strArea}</h6> : null}
              <p>{recipe.strInstructions}</p>
              <table className='centered'>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>

                <tbody>
                  {Object.keys(recipe).map((key) => {
                    if (key.includes('Ingredient') && recipe[key]) {
                      return (
                        <tr key={key}>
                          <td>{recipe[key]}</td>
                          <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
              {recipe.strYoutube ? (
                <div className='row'>
                  <h5>Video Recipe</h5>
                  <iframe
                    className='iframe'
                    title={id}
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                      -11
                    )}`}
                  />
                </div>
              ) : null}
            </div>
          </div>

          <button className='btn go-back' onClick={() => goBack(-1)}>
            Back
          </button>
        </>
      )}
    </div>
  );
};
