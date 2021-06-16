import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductsShowroom = () => {
  const data = useSelector((state) => state.products.filteredProducts)
  const sortType = useSelector((state) => state.products.sortType)

  if (sortType === 'rating') {
    data.sort((a, b) => b.rating - a.rating)
  }
  if (sortType === 'asc') {
    data.sort((a, b) => a.price - b.price)
  }
  if (sortType === 'desc') {
    data.sort((a, b) => b.price - a.price)
  }
  if (sortType === 'review') {
    data.sort((a, b) => b.numOfReviews - a.numOfReviews)
  }

  return (
    <Row>
      {data.map((item) => (
        <Col lg={3} md={4} sm={6} xs={12} className='mb-4' key={item.id}>
          <ProductCard item={item} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductsShowroom
