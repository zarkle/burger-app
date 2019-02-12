import React from 'react';
import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
  <ul className={styles.NavItems}>
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default navItems;