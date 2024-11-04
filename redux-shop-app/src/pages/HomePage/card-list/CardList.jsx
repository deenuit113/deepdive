import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItem from './card-item/CardItem';
import { fetchProducts } from '../../../store/products/products.slice';
import styles from './CardList.module.scss';
import CardSkeleton from '../card-skeleton/CardSkeleton';

const CardList = () => {

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(state => state.products);
  const category = useSelector((state) => state.categories);

  useEffect(() => {
    // 요청 => 응답 => redux store state
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category]);


  if (isLoading) return <CardSkeleton />;

    return (
      <ul className={styles.card_list}>
        {products.map((item) => <CardItem key={item.id} item={item} />)}
      </ul>
    )
}

export default CardList