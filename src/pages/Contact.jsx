import React from 'react';
import styles from "./Contact.css";




const Contact = () => {
  return (
    <section id="contactPage">
    <div>
        <h1 className={styles.contactme}>Contact Me</h1>
        <span className={styles.contactDesc}>Please fill out form below to discuss any work opportunities</span>

    </div>
    <ul>
        <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi0iIbWUhGDcLYq_nZZxmbRHHSuOwLaxcNg&s" alt="mail"/><p>eshanmaduranga0329@gmail.com</p><p>eshan.21@cse.mrt.ac.lk</p>
        </li>
    </ul>
    </section>
  )
}
export default Contact;
