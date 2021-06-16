import React from 'react'
import { useState } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const ProductCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setIsFavorite(!isFavorite)
  }
  return (
    <Card className='h-100 product-card text-center demo1'>
      <span onClick={handleClick} className='favorite-icon'>
        <i
          className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}
          style={{ fontSize: '20px' }}
        ></i>
      </span>
      <Carousel variant='light' interval={null} slide={false}>
        {/* map image array to create carousel images */}
        {item.image.map((img, index) => (
          <Carousel.Item key={index}>
            <Link to={`/product/${item.id}`} className='product-link'>
              <Card.Img variant='top' src={img} className='p-3 d-block w-100' />
            </Link>
            <Carousel.Caption />
          </Carousel.Item>
        ))}
      </Carousel>
      <Link to={`/product/${item.id}`} className='product-link'>
        <Card.Body className='product-card-body'>
          <Rating value={item.rating} numOfReviews={item.numOfReviews} />
          <Card.Text>{item.name}</Card.Text>
          <Card.Title>$ {item.price}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ProductCard
