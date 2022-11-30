import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getFilterCategories} from '../api';

import MealList from '../componets/MealList';

const Category = () => {

  const {name} = useParams();
  const navigate = useNavigate();

  const [meals, setMeals] = useState([]);

  useEffect(()=>{
    getFilterCategories(name).then(date=>{
        setMeals(date.meals);
    });
  }, [])

  return (
   <>
     <button onClick={()=>navigate(-1)}>GO BACK</button>
     <MealList meals = {meals}/>
   </>
  )
}

export default Category