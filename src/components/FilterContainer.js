import React, { useEffect } from 'react'
import { Form, Button, ListGroup, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  applyFilter,
  addBrandFilter,
  addCategoryFilter,
  filterProducts,
  removeBrandFilter,
  removeCategoryFilter,
} from '../actions'

const FilterContainer = () => {
  // global redux state
  const { list, brandFilter, categoryFilter } = useSelector(
    (state) => state.products
  )

  // to use redux actions
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    // to prevent default submit behavior
    e.preventDefault()
    dispatch(applyFilter())
  }
  /*
  const applyFilter = () => {
    const categoryFilteredProducts = list.filter((item) =>
      categoryFilter.includes(item.category)
    )
    const brandFilteredProducts = list.filter((item) =>
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
      dispatch(filterProducts(list))
    }
  }
*/
  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      dispatch(addCategoryFilter(e.target.id))
    } else {
      dispatch(removeCategoryFilter(e.target.id))
    }
    dispatch(applyFilter())
  }

  const handleBrandChange = (e) => {
    if (e.target.checked) {
      dispatch(addBrandFilter(e.target.id))
    } else {
      dispatch(removeBrandFilter(e.target.id))
    }
    dispatch(applyFilter())
  }

  useEffect(() => {
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) {
        document.querySelector('.filter-container').style.display = 'block'
      } else {
        document.querySelector('.filter-container').style.display = 'none'
      }
    })
  }, [])

  return (
    <div className='bg-light filter-container'>
      <Form onSubmit={handleSubmit} as='form'>
        <ListGroup className='p-2'>
          <ListGroup.Item className='mt-1'>
            <h3 className='text-center'>Category</h3>
            <Form.Check
              type='checkbox'
              id='computer'
              label='Computers'
              checked={categoryFilter.find((x) => x === 'computer')}
              onChange={handleCategoryChange}
            />
            <Form.Check
              type='checkbox'
              id='tablet'
              label='Tablets'
              checked={categoryFilter.find((x) => x === 'tablet')}
              onChange={handleCategoryChange}
            />
            <Form.Check
              type='checkbox'
              id='smartphone'
              label='Smart Phones'
              checked={categoryFilter.find((x) => x === 'smartphone')}
              onChange={handleCategoryChange}
            />
          </ListGroup.Item>

          <ListGroup.Item className='p-3'>
            <h3 className='text-center'>Brand</h3>
            <Form.Check
              type='checkbox'
              id='Apple'
              label='Apple'
              checked={brandFilter.find((x) => x === 'Apple')}
              onChange={handleBrandChange}
            />
            <Form.Check
              type='checkbox'
              id='Samsung'
              label='Samsung'
              checked={brandFilter.find((x) => x === 'Samsung')}
              onChange={handleBrandChange}
            />
            <Form.Check
              type='checkbox'
              id='Xiaomi'
              label='Xiaomi'
              checked={brandFilter.find((x) => x === 'Xiaomi')}
              onChange={handleBrandChange}
            />
            <Form.Check
              type='checkbox'
              id='Dell'
              label='Dell'
              checked={brandFilter.find((x) => x === 'Dell')}
              onChange={handleBrandChange}
            />
            <Form.Check
              type='checkbox'
              id='Lenovo'
              label='Lenovo'
              checked={brandFilter.find((x) => x === 'Lenovo')}
              onChange={handleBrandChange}
            />
            <Form.Check
              type='checkbox'
              id='Microsoft'
              label='Microsoft'
              checked={brandFilter.find((x) => x === 'Microsoft')}
              onChange={handleBrandChange}
            />
            <Form.Check
              type='checkbox'
              id='Huawei'
              label='Huawei'
              checked={brandFilter.find((x) => x === 'Huawei')}
              onChange={handleBrandChange}
            />
            <Form.Check
              type='checkbox'
              id='Asus'
              label='Asus'
              checked={brandFilter.find((x) => x === 'Asus')}
              onChange={handleBrandChange}
            />
            <Form.Check
              type='checkbox'
              id='Hp'
              label='Hp'
              checked={brandFilter.find((x) => x === 'Hp')}
              onChange={handleBrandChange}
            />
          </ListGroup.Item>
        </ListGroup>
        <div className='filter-btn-container'>
          <Button
            variant='primary'
            type='button'
            onClick={() => {
              if (window.innerWidth < 768) {
                document.querySelector('.filter-container').style.display =
                  'none'
              }
            }}
          >
            Filter
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default FilterContainer
