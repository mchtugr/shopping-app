import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
  return (
    <Card className='h-100 product-card text-center demo1'>
      {/* <Link to={`/product/${item.id}`} className='product-link'> */}
      <Carousel variant='light' interval={null} slide={false} indicator={true}>
        {/* map image array to create carousel images */}
        {item.image.map((i) => (
          <Carousel.Item>
            <Card.Img variant='top' src={i} className='p-3 d-block w-100' />
            <Carousel.Caption />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body className='product-card-body'>
        <Card.Title className='text-danger'>{item.name}</Card.Title>
        <Card.Text className='text-dark'>$ {item.price}</Card.Text>
      </Card.Body>
      {/* </Link> */}
    </Card>
  )
}

export default ProductCard
