import React from 'react'

const Search = ({searchHandler}) => {
  return (
    <div className='Search'>
        <input type="text" placeholder='Search Here...' 
            onChange={e=> searchHandler(e.target.value)}
        />
    </div>
  )
}

export default Search