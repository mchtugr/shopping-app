import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const SortingSettings = () => {
  return (
    <div className='demo my-3'>
      <ButtonGroup>
        <Button type='button' variant='light' className='sorting-button'>
          Rating
        </Button>
        <Button type='button' variant='light' className='sorting-button'>
          Asc
        </Button>
        <Button type='button' variant='light' className='sorting-button'>
          Desc
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type='button' variant='light' className='sorting-button'>
          <div className>
            <i className='far fa-square'></i> <i className='far fa-square'></i>
          </div>
        </Button>
        <Button type='button' variant='light' className='sorting-button'>
          <div className>
            <i className='far fa-square'></i> <i className='far fa-square'></i>{' '}
            <i className='far fa-square'></i>
          </div>
        </Button>
        <Button type='button' variant='light' className='sorting-button'>
          <div className>
            <i className='far fa-square'></i> <i className='far fa-square'></i>{' '}
            <i className='far fa-square'></i> <i className='far fa-square'></i>
          </div>
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default SortingSettings
