import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  let newIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredients key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (newIngredients.length === 0) {
    newIngredients = <p>What do you want on your burger?</p>
  };
    
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bun-top" />
      {newIngredients}
      <BurgerIngredients type="bun-bottom" />
    </div>
  );
};

export default burger;