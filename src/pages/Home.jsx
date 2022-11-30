import React from 'react'
import { useState, useEffect } from 'react'
import {getAllCategories} from '../api'
import CategoryList from '../componets/CategoryList'
import Search from '../componets/Search'


const Home = () => {

  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);

  useEffect(()=>{
    getAllCategories().then(date=>{
      setCategories(date.categories);
    });
  }, []);

  const searchHandler = (str) =>{
    setFilterCategory(categories.filter(category => category.strCategory.toLowerCase().includes(str.toLowerCase())));
  }

  return (
    <div className='Home'>
      <Search searchHandler={searchHandler}/>
      <CategoryList categories = {filterCategory.length > 0 ? filterCategory :  categories}/>
    </div>
  )
}

export default Home