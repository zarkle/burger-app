import React from 'react';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';

const sideDrawer = (props) => {
  
  return (
    <div className={styles.sideDrawer}>
      <Logo height="11%" />
      <nav>
        <NavItems />
      </nav>
    </div>
  );
};

export default sideDrawer;