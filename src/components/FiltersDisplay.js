import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeCategoryFilter,
  removeBrandFilter,
  applyFilter,
} from '../actions'

const FiltersDisplay = () => {
  // global redux state
  const { categoryFilter, brandFilter } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const handleCategoryRemove = (x) => {
    dispatch(removeCategoryFilter(x))
    //on category remove, apply filter again.
    dispatch(applyFilter())
  }
  const handleBrandRemove = (x) => {
    dispatch(removeBrandFilter(x))
    //on category remove, apply filter again.
    dispatch(applyFilter())
  }
  return (
    <div>
      {categoryFilter.map((x, i) => (
        //maps category filter state
        <div className='filter-display-container mt-3 mx-1 btn border' key={i}>
          <span className='filter-item'>{x} </span>
          <span
            className='cross-container'
            onClick={() => handleCategoryRemove(x)}
          >
            <i className='fas fa-times' style={{ color: '#999' }}></i>
          </span>
        </div>
      ))}
      {brandFilter.map((x, i) => (
        //maps brandFilter state
        <div className='filter-display-container mt-3 mx-1 btn border' key={i}>
          <span className='filter-item'>{x} </span>
          <span
            className='cross-container'
            onClick={() => handleBrandRemove(x)}
          >
            <i className='fas fa-times' style={{ color: '#999' }}></i>
          </span>
        </div>
      ))}
    </div>
  )
}

export default FiltersDisplay
