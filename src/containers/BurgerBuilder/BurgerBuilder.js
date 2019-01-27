import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 2,
  bacon: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    placeOrder: false,
  }
  
  updateOrderState(ingredients) {
    const sum  = Object.keys(ingredients)
      .map(ingKey => ingredients[ingKey])
      .reduce((sum, el) => sum + el);
    this.setState({placeOrder: sum > 0});
  };
  
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updateOrderState(updatedIngredients);
  };
  
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {return}
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updateOrderState(updatedIngredients);   
  };
  
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;  // convert number to boolean
    }
    return(
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler} 
          disabled={disabledInfo} 
          placeOrder={this.state.placeOrder} 
          price={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default BurgerBuilder;