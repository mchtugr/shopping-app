import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const SortingSettings = () => {
  return (
    <div className='demo my-4'>
      <ButtonGroup className='mx-3'>
        <Button type='button' variant='light' className='sort-btn'>
          Rating
        </Button>
        <Button type='button' variant='light' className='sort-btn'>
          Asc
        </Button>
        <Button type='button' variant='light' className='sort-btn'>
          Desc
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type='button' variant='light' className='sort-btn'>
          <div>
            <i className='far fa-square'></i> <i className='far fa-square'></i>
          </div>
        </Button>
        <Button type='button' variant='light' className='sort-btn'>
          <div>
            <i className='far fa-square'></i> <i className='far fa-square'></i>{' '}
            <i className='far fa-square'></i>
          </div>
        </Button>
        <Button type='button' variant='light' className='sort-btn'>
          <div>
            <i className='far fa-square'></i> <i className='far fa-square'></i>{' '}
            <i className='far fa-square'></i> <i className='far fa-square'></i>
          </div>
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default SortingSettings
