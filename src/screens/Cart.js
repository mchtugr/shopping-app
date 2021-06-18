import React from 'react'
import {
  Container,
  Col,
  Row,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Alert,
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions'

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <Container>
      <h1 className='text-center m-3'>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 && (
            <div className='text-center m-3'>
              <Alert variant='danger' className='p-2'>
                You cart is empty
              </Alert>
              <Link to='/' className='btn btn-primary'>
                Go back
              </Link>
            </div>
          )}
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  {/* Product Image */}
                  <Col md={2}>
                    <Image src={item.image[0]} alt={item.name} fluid rounded />
                  </Col>

                  {/* Product link & name */}
                  <Col md={3}>
                    <Link to={`/product/${item.id}`} className='product-link'>
                      {' '}
                      {item.name}{' '}
                    </Link>
                  </Col>

                  {/* Price */}
                  <Col md={2}>${item.price}</Col>

                  {/* Quantity Dropdown */}
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item, Number(e.target.value)))
                      }
                    >
                      {/* {[...Array(5).keys] -> returns [0,1,2,3,4]} */}
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  {/* Delete Button */}
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4} className=''>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item className='text-center'>
                <h3>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h3>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item className='d-grid'>
                <Button
                  type='button'
                  disabled={cartItems.length === 0}
                  onClick={console.log('checkout handled')}
                >
                  Proceed to Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart
