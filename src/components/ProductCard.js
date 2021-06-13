import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const ProductCard = ({ item }) => {
  return (
    <Card className='h-100 product-card text-center demo1'>
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
          <Rating value={item.rating} />
          <Card.Title className='text-danger'>{item.name}</Card.Title>
          <Card.Text className='text-dark'>$ {item.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ProductCard
