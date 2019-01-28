import React from 'react';
import styles from './BuildControl.module.css';
import {INGREDIENT_PRICES} from '../../../../containers/BurgerBuilder/BurgerBuilder';

const buildControl = (props) => (
  <div className={styles.BuildControl}>
    <div 
      className={styles.Label}>
      {props.label} (${INGREDIENT_PRICES[props.type].toFixed(2)})</div>
    <button 
      className={styles.Less} 
      onClick={props.removed} 
      disabled={props.disabled}>Less</button>
    <button 
      className={styles.More} 
      onClick={props.added}>More</button>
  </div>
);

export default buildControl;