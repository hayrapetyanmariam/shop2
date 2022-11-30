import React from 'react'
import MealItem from './MealItem'

const MealList = ({meals}) => {
  return (
    <div className='MealList'>
        {
            meals.map((meal) =>{
                return <MealItem key={meal.mealId} {...meal}/> 
            })
        }
    </div>
  )
}

export default MealList