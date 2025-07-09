import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/images/Basirah Logo Full Color(Transparent).png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}></div>
      <div className={styles.footerContent}>
        <div className={styles.leftColumn}>
          <div className={styles.logoTitle}>
            <img src={logo} alt="Basirah Logo" className={styles.footerLogo} />
            <h3 className={styles.footerTitle}>Basirah Institute</h3>
          </div>
          <p className={styles.footerDesc}>
            Empowering the next generation with Qur'anic knowledge, modern tools,
            and a global community.
          </p>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.footerAddress}>
            <strong>Address:</strong>
            <br />
            123 Qur'anic Studies Ave, City, Country
          </div>
          <div className={styles.socials}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
