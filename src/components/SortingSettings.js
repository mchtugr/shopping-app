import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectSortType } from '../actions'

const SortingSettings = () => {
  const dispatch = useDispatch()
  const sortType = useSelector((state) => state.products.sortType)

  return (
    <div className='demo my-4'>
      <ButtonGroup className='mx-3'>
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'rating' && 'mesut'}`}
          onClick={() => dispatch(selectSortType('rating'))}
        >
          Rating
        </Button>
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'review' && 'mesut'}`}
          onClick={() => dispatch(selectSortType('review'))}
        >
          Review
        </Button>
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'asc' && 'mesut'}`}
          onClick={() => dispatch(selectSortType('asc'))}
        >
          Asc
        </Button>
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'desc' && 'mesut'}`}
          onClick={() => dispatch(selectSortType('desc'))}
        >
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
