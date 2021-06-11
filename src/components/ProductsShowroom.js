import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import data from '../data'

const ProductsShowroom = () => {
  return (
    <Row>
      {data.map((item) => (
        <Col lg={3} md={4} sm={6} xs={12} className='my-3'>
          <ProductCard item={item} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductsShowroom
