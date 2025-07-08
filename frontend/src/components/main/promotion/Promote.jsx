import React from "react";
import styles from "./promote.module.css";
import phoImg from "../../../assets/images/pho.png";
import qrImg from "../../../assets/images/qr.jpg";
import skylinkLogo from "../../../assets/skylink.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";

function Promotion() {
  return (
    <section className={styles.promotionBest} id="app">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={phoImg}
          alt="Basirah App on Phone"
          className={styles.phoneImageBest}
        />
        <div className={styles.poweredBySkylink}>
          <span>Powered by</span>
          <img
            src={skylinkLogo}
            alt="Skylink logo"
            className={styles.skylinkLogo}
          />
        </div>
      </div>
      <div className={styles.promoRight}>
        <h2 className={styles.promoHeadline}>Get the Basirah App</h2>
        <div className={styles.promoBenefit}>
          Experience seamless learning and teaching—anytime, anywhere.
        </div>
        <div className={styles.downloadRow}>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.promoDownloadBtn}
          >
            <FontAwesomeIcon
              icon={faAppStoreIos}
              className={styles.promoBtnIcon}
            />
            Download on App Store
          </a>
          <div className={styles.qrContainerSmall}>
            <img
              src={qrImg}
              alt="Download Basirah App QR"
              className={styles.qrImageSmall}
            />
            <div className={styles.qrLabelSmall}>Scan</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
