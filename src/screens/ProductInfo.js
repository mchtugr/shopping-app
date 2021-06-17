import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Carousel, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import ShippingDetail from '../components/ShippingDetail'
import { addToCart } from '../actions'

const ProductInfo = ({ match, history }) => {
  const [qty, setQty] = useState(1)
  const data = useSelector((state) => state.products.list)
  const currentData = data.find((i) => i.id === Number(match.params.id))
  const dispatch = useDispatch()

  const handleCartClick = () => {
    dispatch(addToCart(currentData, qty))
  }

  const handleBuyNow = () => {
    dispatch(addToCart(currentData, qty))
    history.push('/cart')
  }
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
            <Form.Control
              type='number'
              value={qty}
              min='1'
              max={currentData.countInStock}
              onChange={(e) => setQty(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>
        <div className='text-center'>
          <Button className='m-4' onClick={handleCartClick}>
            <span>
              <i className='fas fa-shopping-cart'></i>
            </span>{' '}
            Add to Cart
          </Button>
          <Button variant='success' className='m-4' onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default ProductInfo
