import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Carousel, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import ShippingDetail from '../components/ShippingDetail'

const ProductInfo = ({ match }) => {
  const [qty, setQty] = useState(1)
  const data = useSelector((state) => state.products.list)
  const currentData = data.find((i) => i.id === Number(match.params.id))

  return (
    <Row className='justify-content-around m-0'>
      <Col md={5}>
        <Carousel
          variant='light'
          interval={3000}
          slide={true}
          className='product-info-carousel'
          id='myCarousel'
        >
          {currentData.image.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                variant='top'
                src={img}
                className='p-3 d-block w-100'
                alt={currentData.name}
              />
              <Carousel.Caption />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
      <Col md={5}>
        <h3 className='text-center mt-4'>{currentData.name}</h3>
        <Rating
          value={currentData.rating}
          numOfReviews={currentData.numOfReviews}
        />

        <p className='mt-3'>{currentData.description}</p>

        <ShippingDetail type={currentData.shippingType} />

        <Row className='mt-3 justify-content-center'>
          <Col xs={'auto'} className='p-1 text-center product-qty'>
            Quantity:
          </Col>
          <Col xs={'auto'}>
            {/* <span
              onClick={handleDecrement}
              className='px-3 stock-btn'
              disabled={qty === 1}
            >
              -
            </span> */}
            <Form.Control
              type='number'
              value={qty}
              min='1'
              max={currentData.countInStock}
              onChange={(e) => setQty(e.target.value)}
            ></Form.Control>
            {/* <span className='px-3 mx-2 product-qty'>{qty}</span> */}
            {/* <span
              onClick={handleIncrement}
              className='px-3 stock-btn'
              disabled={qty === currentData.countInStock}
            >
              +
            </span> */}
          </Col>
        </Row>
        <div className='text-center'>
          <Button className='m-4'>Add to Cart</Button>
        </div>
      </Col>
    </Row>
  )
}

export default ProductInfo
