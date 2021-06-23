import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Carousel, Button, Form, Alert } from 'react-bootstrap'
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
    document.querySelector('.success-message').style.display = 'block'
    setTimeout(() => {
      document.querySelector('.success-message').style.display = 'none'
    }, 1000)
  }

  const handleBuyNow = () => {
    dispatch(addToCart(currentData, qty))
    history.push('/cart')
  }
  return (
    <Row className='justify-content-around m-0 mb-5'>
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
                src={process.env.PUBLIC_URL + img}
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
          <Col xs={3}>
            <Form.Control
              as='select'
              value={currentData.qty}
              onChange={(e) =>
                dispatch(addToCart(currentData, Number(e.target.value)))
              }
            >
              {/* {[...Array(5).keys] -> returns [0,1,2,3,4]} */}
              {[...Array(currentData.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Alert
          variant='success'
          className='success-message mt-3 p-1 text-center'
        >
          Successfully added to Cart!
        </Alert>
        <div className='text-center mt-3'>
          <Button className='mx-4' onClick={handleCartClick}>
            <span>
              <i className='fas fa-shopping-cart'></i>
            </span>{' '}
            Add to Cart
          </Button>
          <Button variant='success' className='mx-4' onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default ProductInfo
