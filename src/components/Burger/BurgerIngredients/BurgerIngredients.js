import React from 'react';
import styles from './BurgerIngredients.module.css'
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
  let ingredients;
  
  switch (props.type) {
    case ('bun-bottom'):
      ingredients = <div className={styles.BunBottom}></div>;
      break;
    case ('bun-top'):
      ingredients = (
        <div className={styles.BunTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;
    case ('meat'):
      ingredients = <div className={styles.Meat}></div>;
      break;
    case ('cheese'):
      ingredients = <div className={styles.Cheese}></div>;
      break;
    case ('salad'):
      ingredients = <div className={styles.Salad}></div>;
      break;
    case ('bacon'):
      ingredients = <div className={styles.Bacon}></div>;
      break;
    default:
      ingredients = null;
  };
  return ingredients;
};

export default burgerIngredient;