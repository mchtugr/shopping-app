import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart)
  return (
    <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          {/* Logo & BrandName */}
          <Navbar.Brand>
            <img
              alt=''
              src='/cart.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            ShopBurada
          </Navbar.Brand>
        </LinkContainer>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto' style={{ marginLeft: 'auto' }}>
            <LinkContainer to='/cart'>
              <Nav.Link>
                {/* cart item number */}
                {cartItems.length > 0 && (
                  <div className='cart-item-number-container'>
                    <div className='text-center align-middle cart-item-number'>
                      {cartItems.reduce(
                        (acc, item) => acc + Number(item.qty),
                        0
                      )}
                    </div>
                  </div>
                )}
                <i
                  className='fas fa-shopping-cart'
                  style={{ fontSize: '24px' }}
                ></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
