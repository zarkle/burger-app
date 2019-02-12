import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  
  // clean way of setting the state when it depends on the old state
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }
  
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerClosedHandler} />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;