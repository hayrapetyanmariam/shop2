import React from 'react'
import { Link } from 'react-router-dom'

const MealItem = ({strMeal, strMealThumb, idMeal}) => {
  return (
    <div className='MealItem'>
        <h4>{idMeal}</h4>
        <p>{strMeal}</p>
        <img src={strMealThumb} />
        <Link to={'/recipe/' + idMeal}>Detail Meal... </Link>
    </div>
  )
}

export default MealItem