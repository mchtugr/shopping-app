import React from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductsShowroom = () => {
  const { filteredProducts, sortType, colSize, pagination } = useSelector(
    (state) => state.products
  )
  const { productsPerPage, currentPage } = pagination

  switch (sortType) {
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
    case 'review':
      filteredProducts.sort((a, b) => b.numOfReviews - a.numOfReviews)
      break
    case 'asc':
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case 'desc':
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    default:
      filteredProducts.sort((a, b) => a.id - b.id)
      break
  }

  const startIndex = (currentPage - 1) * productsPerPage
  const currentData = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  )
  return (
    <Row className='m-0 p-0 '>
      {currentData.length > 0 ? (
        currentData.map((item) => (
          <Col
            lg={colSize}
            md={4}
            sm={6}
            xs={12}
            className='mb-4'
            key={item.id}
          >
            <ProductCard item={item} />
          </Col>
        ))
      ) : (
        <div className='d-flex justify-content-center mt-3'>
          <Col lg={6} md={8} sm={10}>
            <Alert variant='danger' className='mx-5 py-2 text-center'>
              No products found!
            </Alert>
          </Col>
        </div>
      )}
    </Row>
  )
}

export default ProductsShowroom
