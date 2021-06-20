import React, { useEffect } from 'react'
import { Form, Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  applyFilter,
  addBrandFilter,
  addCategoryFilter,
  removeBrandFilter,
  removeCategoryFilter,
  changePagination,
} from '../actions'

const FilterContainer = () => {
  // global redux state
  const { brandFilter, categoryFilter } = useSelector((state) => state.products)

  // to use redux actions
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    // to prevent default submit behavior
    e.preventDefault()
    dispatch(applyFilter())
    dispatch(changePagination(1))
  }

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      dispatch(addCategoryFilter(e.target.id))
    } else {
      dispatch(removeCategoryFilter(e.target.id))
    }
    dispatch(applyFilter())
    // when filter applied, pagination returns to initial state
    dispatch(changePagination(1))
  }

  const handleBrandChange = (e) => {
    if (e.target.checked) {
      dispatch(addBrandFilter(e.target.id))
    } else {
      dispatch(removeBrandFilter(e.target.id))
    }
    dispatch(applyFilter())
    // when filter applied, pagination returns to initial state
    dispatch(changePagination(1))
  }

  useEffect(() => {
    window.addEventListener('resize', function () {
      const filterContainer = document.querySelector('.filter-container')
      if (filterContainer) {
        //when window screen is bigger than 768px FilterContainer component displayed
        if (window.innerWidth >= 768) {
          filterContainer.style.display = 'block'
          // if smaller than 768px, default display is 'none'
        } else {
          filterContainer.style.display = 'none'
        }
      }
    })
  }, [])

  return (
    <div className='bg-light filter-container'>
      <Form onSubmit={handleSubmit} as='form'>
        <ListGroup className='p-2'>
          {/* Category Filter */}
          <ListGroup.Item className='mt-1'>
            <h3>Category</h3>
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

          {/* Brand Filter */}
          <ListGroup.Item className='p-3'>
            <h3>Brand</h3>
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

        {/* this section is available when screen size is smaller than 768px */}
        <div className='filter-btn-container'>
          <Button
            variant='primary'
            type='button'
            className='m-auto mb-2 px-5 text-center'
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
