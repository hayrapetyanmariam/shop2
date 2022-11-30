import React from 'react'
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {

    console.log(category);
  

  return (
    <div className='CategoryItem'>
        <h5>{category.idCategory}</h5>
        <h3>{category.strCategory}</h3>
        <p>{category.strCategoryDescription}</p>
        <img src={category.strCategoryThumb} />
        <Link className='btn' to={'/category/' + category.strCategory}> Watch {category.strCategory}...</Link>
    </div>
  )
}

export default CategoryItem