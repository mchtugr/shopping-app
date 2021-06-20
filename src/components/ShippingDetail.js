import React from 'react'
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap'

const ShippingDetail = ({ type }) => {
  return (
    <div className='text-center mt-3'>
      {type === 'fast' ? (
        <span>
          <i className='fas fa-shipping-fast'></i> Fast Shipping
        </span>
      ) : (
        <span>
          <i className='fas fa-truck'></i> Standard Shipping
        </span>
      )}{' '}
      {/* displays extra info on hover */}
      <OverlayTrigger
        placement='top'
        overlay={
          <Tooltip>
            {type === 'fast' ? 'delivered in 24h' : 'delivered in 72h'}
          </Tooltip>
        }
      >
        <Button variant='light' className='shipping-tooltip'>
          ?
        </Button>
      </OverlayTrigger>
    </div>
  )
}

export default ShippingDetail
