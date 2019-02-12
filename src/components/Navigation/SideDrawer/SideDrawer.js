import React from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';

const sideDrawer = (props) => {
  
  return (
    <div className={styles.sideDrawer}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default sideDrawer;