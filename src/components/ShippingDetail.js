import React from 'react'
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap'

const ShippingDetail = ({ type }) => {
  return (
    <div className='text-center mt-3'>
      {type === 'fast' ? (
        <span>
          <i class='fas fa-shipping-fast'></i> Fast Shipping
        </span>
      ) : (
        <span>
          <i class='fas fa-truck'></i> Standard Shipping
        </span>
      )}{' '}
      <OverlayTrigger
        placement='top'
        overlay={<Tooltip>arrives in 24h</Tooltip>}
      >
        <Button variant='light' className='shipping-tooltip'>
          ?
        </Button>
      </OverlayTrigger>
    </div>
  )
}

export default ShippingDetail
