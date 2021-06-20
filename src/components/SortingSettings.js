import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeColSize, selectSortType } from '../actions'

const SortingSettings = () => {
  const dispatch = useDispatch()
  // const sortType = useSelector((state) => state.products.sortType)
  const [sortType, setSortType] = useState('')

  const handleClick = (e) => {
    //if sort type is the current one, deactivate it
    if (sortType === e.target.id) {
      setSortType('')
    } else {
      setSortType(e.target.id)
    }
  }

  // redux global state
  const colSize = useSelector((state) => state.products.colSize)

  useEffect(() => {
    dispatch(selectSortType(sortType))
  }, [sortType, dispatch])

  return (
    <div className='sorting-settings-container my-4'>
      <ButtonGroup className='mx-3 sort-buttons'>
        {/* Sort by Rating */}
        <Button
          id='rating'
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'rating' && 'active-btn'}`}
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          Rating
        </Button>
        {/* Sort by Review */}
        <Button
          id='review'
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'review' && 'active-btn'}`}
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          Review
        </Button>
        {/* Sort by low to high */}
        <Button
          id='asc'
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'asc' && 'active-btn'}`}
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          Asc
        </Button>
        {/* Sort by high to low */}
        <Button
          id='desc'
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'desc' && 'active-btn'}`}
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          Desc
        </Button>
      </ButtonGroup>
      {/* Column Size Setting --- available in large screens only */}
      <ButtonGroup className='grid-col-size'>
        {/* 2 Column */}
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${colSize === 6 && 'active-btn'}`}
          onClick={() => dispatch(changeColSize(6))}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div>
            <i className='far fa-square'></i> <i className='far fa-square'></i>
          </div>
        </Button>
        {/* 3 Column */}
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${colSize === 4 && 'active-btn'}`}
          onClick={() => dispatch(changeColSize(4))}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div>
            <i className='far fa-square'></i> <i className='far fa-square'></i>{' '}
            <i className='far fa-square'></i>
          </div>
        </Button>
        {/* 4 Column */}
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${colSize === 3 && 'active-btn'}`}
          onClick={() => dispatch(changeColSize(3))}
          onMouseDown={(e) => e.preventDefault()}
        >
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
