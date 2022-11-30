import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {getMealById} from '../api' 

const Recipe = () => {

  const [recipe, setRecipe] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getMealById(id).then(date=>{
      setRecipe(date.meals[0]);
    });
  }, [id])


  return (
    <div className='Recipe'>
      <button onClick = {()=>navigate(-1)}>Go Back</button>
    
   {
    recipe && 
    <div>
        <h2>{recipe.idMeal}</h2>
        <h2>{recipe.strArea}</h2>
        <h2>{recipe.strCategory}</h2>
        <img src={recipe.strMealThumb} />
  </div>
   }
   </div>
  )
}

export default Recipe