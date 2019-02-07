import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>);
    });
  
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your burger has the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: ${props.price}</p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseCheckout}>Checkout</Button>
    </Aux>
  )
};

export default orderSummary;