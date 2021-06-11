import React from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ item }) => {
  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={item.image[0]} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>$ {item.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
