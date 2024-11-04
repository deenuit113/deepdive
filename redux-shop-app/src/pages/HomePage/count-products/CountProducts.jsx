import React from 'react'
import { useSelector } from 'react-redux'
import styles from './CountProducts.module.scss';

const CountProducts = () => {
  const { products, isLoading } =
    useSelector(state => state.products);
  return (
    <div className={styles.count_products}>
      {isLoading ?
        <p>Loading...</p>
        :
        <p>Showing: {products.length} items</p>
      }
    </div>
  )
}

export default CountProducts