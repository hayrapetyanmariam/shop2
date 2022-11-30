import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryList = ({categories}) => {
  return (
    <div className='CategoryList'>
      {
          categories.map(category =>{
            return <CategoryItem 
                key={categories.idCategory}
                category = {category}
            />
        })
      }
    </div>
  )
}

export default CategoryList