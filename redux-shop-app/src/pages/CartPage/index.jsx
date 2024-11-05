import React from 'react'
import { useSelector } from 'react-redux'
import CartEmpty from '../../components/cart-empty/CartEmpty';

const CartPage = () => {
  const { products } = useSelector(state => state.cart);
  return (
    <div className='page'>
      {
        !products.length ?
        (
          <CartEmpty/>
        )
        :
        (
          <div>
            <h1>장바구니</h1>
          </div>
        )
      }
    </div>
  )
}

export default CartPage