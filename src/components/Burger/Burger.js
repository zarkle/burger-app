import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bun-top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="bun-bottom" />
    </div>
  );
};

export default burger;