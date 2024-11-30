import React from 'react'
import '../styles/CartComponent.css'
import { Images } from '../asests'

function CartComponent({cartItems}) {
  return (
    <div className='cart-component-main'>
        <div className='card-head'>
            <img src={Images.basket} className='basket-img' />
            <span>My Basket</span>
        </div>
    </div>
  )
}

export default CartComponent
