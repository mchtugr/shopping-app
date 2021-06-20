import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Cart from './screens/Cart'
import ProductInfo from './screens/ProductInfo'
import Header from './components/Header'

const App = () => {
  return (
    <HashRouter>
      <Header />
      <div>
        <>
          <Route path='/' exact component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={ProductInfo} />
        </>
      </div>
    </HashRouter>
  )
}

export default App
