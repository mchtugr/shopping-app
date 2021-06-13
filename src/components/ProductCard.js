import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
  return (
    <Card className='h-100 product-card text-center'>
      <Link to={`/product/${item.id}`} className='product-link'>
        <Card.Img variant='top' src={item.image[0]} className='p-3' />
        <Card.Body className='product-card-body'>
          <Card.Title className='text-danger'>{item.name}</Card.Title>
          <Card.Text className='text-dark'>$ {item.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default ProductCard
