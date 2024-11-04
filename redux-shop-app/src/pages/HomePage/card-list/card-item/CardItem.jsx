import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CardItem.module.scss';

const CardItem = ({ item }) => {
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
        <button>
          장바구니에 담기
        </button>
        <p>{item.price}</p>
      </div>
    </li>
  )
}

export default CardItem