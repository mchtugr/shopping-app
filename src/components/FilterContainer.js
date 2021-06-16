import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  addBrandFilter,
  addCategoryFilter,
  filterProducts,
  removeBrandFilter,
  removeCategoryFilter,
} from '../actions'

const FilterContainer = () => {
  // global redux state
  const data = useSelector((state) => state.products.list)
  const brandFilter = useSelector((state) => state.products.brandFilter)
  const categoryFilter = useSelector((state) => state.products.categoryFilter)

  // to use redux actions
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    // to prevent default submit behavior
    e.preventDefault()

    const categoryFilteredProducts = data.filter((item) =>
      categoryFilter.includes(item.category)
    )
    const brandFilteredProducts = data.filter((item) =>
      brandFilter.includes(item.brand)
    )
    //if there is only category filter
    if (categoryFilter.length > 0 && brandFilter.length < 1) {
      dispatch(filterProducts(categoryFilteredProducts))
    }
    // if there is only brand filter
    else if (brandFilter.length > 0 && categoryFilter.length < 1) {
      dispatch(filterProducts(brandFilteredProducts))
    }
    // if both filter is available
    else if (categoryFilter.length > 0 && brandFilter.length > 0) {
      const intersection = brandFilteredProducts.filter((item) =>
        categoryFilteredProducts.includes(item)
      )
      dispatch(filterProducts(intersection))
    }
    // if no filter selected
    else {
      dispatch(filterProducts(data))
    }
  }

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      dispatch(addCategoryFilter(e.target.id))
    } else {
      dispatch(removeCategoryFilter(e.target.id))
    }
  }

  const handleBrandChange = (e) => {
    if (e.target.checked) {
      dispatch(addBrandFilter(e.target.id))
    } else {
      dispatch(removeBrandFilter(e.target.id))
    }
  }
  return (
    <div className='bg-light filter-container px-3'>
      <Form onSubmit={handleSubmit} as='form'>
        <Form.Group className='p-3'>
          <h3 className='text-center'>Category</h3>
          <Form.Check
            type='checkbox'
            id='computer'
            label='Computers'
            onChange={handleCategoryChange}
          />
          <Form.Check
            type='checkbox'
            id='tablet'
            label='Tablets'
            onChange={handleCategoryChange}
          />
          <Form.Check
            type='checkbox'
            id='smartphone'
            label='Smart Phones'
            onChange={handleCategoryChange}
          />
        </Form.Group>

        <Form.Group className='p-3'>
          <h3 className='text-center'>Brand</h3>
          <Form.Check
            type='checkbox'
            id='Apple'
            label='Apple'
            onChange={handleBrandChange}
          />
          <Form.Check
            type='checkbox'
            id='Samsung'
            label='Samsung'
            onChange={handleBrandChange}
          />
          <Form.Check
            type='checkbox'
            id='Xiaomi'
            label='Xiaomi'
            onChange={handleBrandChange}
          />
        </Form.Group>

        <div className='filter-btn-container'>
          <Button variant='primary' type='submit'>
            Filter
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default FilterContainer
