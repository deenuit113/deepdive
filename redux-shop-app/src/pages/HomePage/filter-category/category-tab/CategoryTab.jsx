import React from 'react'
import styles from './CategoryTab.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../../../store/categories/categories.slice';

const CategoryTab = ({ text, categoryName }) => {

  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories);
  console.log(category === categoryName);

  const getActiveCategory = () => {
    dispatch(setActiveCategory(categoryName));
  }

  return (
    <button
      className={category === categoryName ? styles.active_category : styles.category_button}
      onClick={getActiveCategory}
    >
      {text}
    </button>
  )
}

export default CategoryTab