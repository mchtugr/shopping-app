import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Product = ({ item }) => {
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant='top' src={item.image[0]} width='20px' />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product
