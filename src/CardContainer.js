import React from 'react'
import Product from './Product'

const CardContainer = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Product item={item} />
      ))}
    </div>
  )
}

export default CardContainer
