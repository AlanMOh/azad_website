import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <div className={styles.infoBox}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          <span>Hoofdkantoor</span>
        </div>
        <div className={styles.infoBox}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <span>0600000000</span>
        </div>
        <div className={styles.infoBox}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <span>email.azad.com</span>
        </div>
        <div className={styles.infoBox}>
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          <span>facebook</span>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          <span>Instagram</span>
        </div>
      </div>
      <div className={styles.contactForm}>
        <form action="#">
          <div className={styles.inputBox}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className={styles.submitBox}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
