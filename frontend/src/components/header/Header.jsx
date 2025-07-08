import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/Basirah Logo Full Color(Transparent).png";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { name: "App", href: "#app" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const appSection = document.getElementById("app");
      const contactSection = document.getElementById("contact");
      const scrollPosition = window.scrollY + 120;
      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection("contact");
      } else if (appSection && scrollPosition >= appSection.offsetTop) {
        setActiveSection("app");
      } else {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.transparent : ""}`}
    >
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="Basirah Logo" />
          <span className={styles.brandName}>Basirah Institute</span>
        </a>
        <nav className={styles.navMenu + (menuOpen ? " " + styles.open : "")}>
          <button
            className={styles.closeMenu}
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            &times;
          </button>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={
                    activeSection === link.href.replace("#", "")
                      ? styles.activeLink
                      : ""
                  }
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={styles.menuIcon}
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars size={32} color="#00C894" />
        </button>
      </div>
    </header>
  );
}
