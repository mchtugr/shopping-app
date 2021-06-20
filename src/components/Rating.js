import React from 'react'

const Rating = ({ value, numOfReviews }) => {
  return (
    <div className='text-center'>
      {/* first star */}
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
      {/* second star */}
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
      {/* third star */}
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
      {/* fourth star */}
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
      {/* fifth star */}
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
      {/* display review number */}
      <span className='text-secondary review-number'>
        {' '}
        {numOfReviews ? numOfReviews : 0}{' '}
        {numOfReviews > 1 ? 'Reviews' : 'Review'}
      </span>
    </div>
  )
}

export default Rating
