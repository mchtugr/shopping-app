import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import FilterContainer from '../components/FilterContainer'
import FiltersDisplay from '../components/FiltersDisplay'
import Pagination from '../components/Pagination'
import ProductsShowroom from '../components/ProductsShowroom'
import SortingSettings from '../components/SortingSettings'

const Home = () => {
  const handleClick = () => {
    document.querySelector('.filter-container').style.display = 'block'
  }
  return (
    <Row className='m-0'>
      <Col xl={2} md={3} className='p-0'>
        <Button className='toggle m-1' onClick={handleClick}>
          Toggle
        </Button>
        <FilterContainer />
      </Col>
      <Col xl={10} md={9}>
        <FiltersDisplay />
        <SortingSettings />
        <ProductsShowroom />
        <Pagination />
      </Col>
    </Row>
  )
}

export default Home
