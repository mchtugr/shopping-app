import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Cart from './screens/Cart'
import ProductInfo from './screens/ProductInfo'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Container>
          <Route path='/' component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={ProductInfo} />
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
