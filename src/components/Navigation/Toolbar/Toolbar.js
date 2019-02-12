import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <Logo height="80%" />
    <nav><NavItems /></nav>
  </header>
);

export default toolbar;