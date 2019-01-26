import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
  render() {
    return(
      <Aux>
        <div>Burger (image)</div>
        <div>Build Controls (ingredients)</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;