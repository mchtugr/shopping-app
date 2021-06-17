import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Rating = ({ value, numOfReviews }) => {
  return (
    <div className='text-center'>
      <span>
        <i
          style={{ color: 'gold' }}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: 'gold' }}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: 'gold' }}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: 'gold' }}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: 'gold' }}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span className='text-secondary review-number'>
        {' '}
        {numOfReviews ? numOfReviews : 0}{' '}
        {numOfReviews > 1 ? 'Reviews' : 'Review'}
      </span>
    </div>
  )
}

export default Rating
