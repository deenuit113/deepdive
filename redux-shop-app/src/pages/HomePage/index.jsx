import React from 'react'
import FiltersCategory from './filter-category/FiltersCategory'
import CountProducts from './count-products/CountProducts'
import CardList from './card-list/CardList'
import CardSkeleton from './card-skeleton/CardSkeleton'

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
          <h1>Products</h1>
          <FiltersCategory />
          <CountProducts />
          <CardList />
          <CardSkeleton />
      </div>
    </div>
  )
}

export default HomePage