import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FilterContainer from '../components/FilterContainer'
import Pagination from '../components/Pagination'
import ProductsShowroom from '../components/ProductsShowroom'
import SortingSettings from '../components/SortingSettings'

const Home = () => {
  return (
    <Row>
      <Col md={2}>
        <FilterContainer />
      </Col>
      <Col md={10} className='text-center'>
        <SortingSettings />
        <ProductsShowroom />
        <Pagination />
      </Col>
    </Row>
  )
}

export default Home
