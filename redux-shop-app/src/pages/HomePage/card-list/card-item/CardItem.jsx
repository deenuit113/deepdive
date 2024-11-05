import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CardItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../store/cart/cart.slice';

const CardItem = ({ item }) => {
  const dispatch = useDispatch()

  const { products } = useSelector(state => state.cart);
  const productMatching = products.some((el) => el.id === item.id);
  const addItemCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt={item.title}
        />
      </Link>
      <h5>{item.title.substring(0, 15)}...</h5>

      <div>
        <button onClick={() => !productMatching && addItemCart()} disabled={productMatching}>
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>{item.price}</p>
      </div>
    </li>
  )
}

export default CardItem