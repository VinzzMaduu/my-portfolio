import React from 'react';
import styles from './Hero.css';
import { getImageUrl } from '../utils';
import meImage from '../assets/me.jpg';

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-content">
      
      <h1>Hello, I'm Eshan Maduranga.</h1>
      <p>I'm a passionate developer creating beautiful and functional web applications.</p>
      <a href='mailto:eshanmaduranga0329@gmail.com'className="contact">Contact Me</a>
      <a href="#portfolio" className="btn">View My Work</a>
      
    </div>
    <img className="me" src={meImage} alt="me" />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur} />
  </section>
);

export default Hero;
