
import React,{useState} from 'react';
import styles from "./NavBar.module.css";
/*import { getImageUrl } from '../sssutils';*/

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menue}>
            
            <ul className={styles.menuItems}>
                <li><a href='#about'>About</a></li>
                <li><a href='#Expirience'>Expirience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

