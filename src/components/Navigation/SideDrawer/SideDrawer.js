import React from 'react';
import styles from './sideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems';

const sideDrawer = (props) => {
  
  return (
    <div className={styles.sideDrawer}>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default sideDrawer;