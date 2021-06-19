import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeCategoryFilter,
  removeBrandFilter,
  applyFilter,
} from '../actions'

const FiltersDisplay = () => {
  const { categoryFilter, brandFilter } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const handleCategoryRemove = (x) => {
    dispatch(removeCategoryFilter(x))
    dispatch(applyFilter())
  }
  const handleBrandRemove = (x) => {
    dispatch(removeBrandFilter(x))
    dispatch(applyFilter())
  }
  return (
    <div>
      {categoryFilter.map((x, i) => (
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
