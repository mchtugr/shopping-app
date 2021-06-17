import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeColSize, selectSortType } from '../actions'

const SortingSettings = () => {
  const dispatch = useDispatch()
  // const sortType = useSelector((state) => state.products.sortType)
  const [sortType, setSortType] = useState('')

  const handleClick = (e) => {
    if (sortType === e.target.id) {
      setSortType('')
    } else {
      setSortType(e.target.id)
    }
  }

  const colSize = useSelector((state) => state.products.colSize)

  useEffect(() => {
    dispatch(selectSortType(sortType))
  }, [sortType])

  return (
    <div className='demo my-4'>
      <ButtonGroup className='mx-3'>
        <Button
          id='rating'
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'rating' && 'mesut'}`}
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          Rating
        </Button>
        <Button
          id='review'
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'review' && 'mesut'}`}
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          Review
        </Button>
        <Button
          id='asc'
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'asc' && 'mesut'}`}
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          Asc
        </Button>
        <Button
          id='desc'
          type='button'
          variant='light'
          className={`sort-btn ${sortType === 'desc' && 'mesut'}`}
          onClick={handleClick}
          onMouseDown={(e) => e.preventDefault()}
        >
          Desc
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${colSize === 6 && 'mesut'}`}
          onClick={() => dispatch(changeColSize(6))}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div>
            <i className='far fa-square'></i> <i className='far fa-square'></i>
          </div>
        </Button>
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${colSize === 4 && 'mesut'}`}
          onClick={() => dispatch(changeColSize(4))}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div>
            <i className='far fa-square'></i> <i className='far fa-square'></i>{' '}
            <i className='far fa-square'></i>
          </div>
        </Button>
        <Button
          type='button'
          variant='light'
          className={`sort-btn ${colSize === 3 && 'mesut'}`}
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
