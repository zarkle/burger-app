import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    {controls.map(control => (
      <BuildControl 
        key={control.label} 
        label={control.label} 
        type={control.type} 
        added={() => props.ingredientAdded(control.type)} 
        removed={() => props.ingredientRemoved(control.type)} 
        disabled={props.disabled[control.type]} />
    ))}
    <p>Burger Price: ${props.price.toFixed(2)}</p>
    <button className={styles.OrderButton}
      disabled={!props.placeOrder} 
      onClick={props.ordered}>ORDER BURGER</button>
  </div>
);

export default buildControls;