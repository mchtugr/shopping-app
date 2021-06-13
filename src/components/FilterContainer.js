import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const FilterContainer = () => {
  const [category, setCategory] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <div className='bg-light filter-container px-3'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='p-3'>
          <h3 className='text-center'>Category</h3>
          <Form.Check type='checkbox' id='computer' label='Computers' />
          <Form.Check type='checkbox' id='tablet' label='Tablets' />
          <Form.Check type='checkbox' id='smartphone' label='Smart Phones' />
        </Form.Group>

        <Form.Group className='p-3'>
          <h3 className='text-center'>Brand</h3>
          <Form.Check type='checkbox' id='apple' label='Apple' />
          <Form.Check type='checkbox' id='samsung' label='Samsung' />
          <Form.Check type='checkbox' id='xiaomi' label='Xiaomi' />
        </Form.Group>

        <Form.Group className='p-3'>
          <h3 className='text-center'>Price</h3>
          <Form.Check type='checkbox' id='under250' label='0 - $250' />
          <Form.Check type='checkbox' id='under500' label='250 - $500' />
          <Form.Check type='checkbox' id='above500' label='$500+' />
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
