import React from 'react'
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
        <>
          <Route path='/' component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={ProductInfo} />
        </>
      </div>
    </BrowserRouter>
  )
}

export default App
