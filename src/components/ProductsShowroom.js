import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductsShowroom = () => {
  const data = useSelector((state) => state.products.filteredProducts)
  const sortType = useSelector((state) => state.products.sortType)

  switch (sortType) {
    case 'rating':
      data.sort((a, b) => b.rating - a.rating)
      break
    case 'review':
      data.sort((a, b) => b.numOfReviews - a.numOfReviews)
      break
    case 'asc':
      data.sort((a, b) => a.price - b.price)
      break
    case 'desc':
      data.sort((a, b) => b.price - a.price)
      break
    default:
      data.sort((a, b) => a.id - b.id)
      break
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
