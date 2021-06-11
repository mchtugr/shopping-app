import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
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
                {true && (
                  <div className='cart-item-number'>
                    <div className='text-center align-middle'>1</div>
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
