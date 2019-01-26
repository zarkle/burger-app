import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  const newIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredients key={ingKey + i} type={ingKey} />;
      });
    });

  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bun-top" />
      {newIngredients}
      <BurgerIngredients type="bun-bottom" />
    </div>
  );
};

export default burger;