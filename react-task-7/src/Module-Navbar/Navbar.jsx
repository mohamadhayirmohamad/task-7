import  { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(path); 
    }, 2000); 
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>KELLY</div>
        <ul className={styles.navLinks}>
          <li className={styles.navItem} onClick={() => handleNavClick("/")}>
            <Link to="/" className={`${styles.navLink} ${styles.active}`}>
              Home
            </Link>
          </li>
          <li className={styles.navItem} onClick={() => handleNavClick("/about")}>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem} onClick={() => handleNavClick("/resume")}>
            <Link to="/resume" className={styles.navLink}>
              Resume
            </Link>
          </li>
          <li className={styles.navItem} onClick={() => handleNavClick("/services")}>
            <Link to="/services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li className={styles.navItem} onClick={() => handleNavClick("/portfolio")}>
            <Link to="/portfolio" className={styles.navLink}>
              Portfolio
            </Link>
          </li>
          <li className={styles.navItem} onClick={() => handleNavClick("/dropdown")}>
            <Link to="/dropdown" className={styles.navLink}>
              Dropdown
            </Link>
          </li>
          <li className={styles.navItem} onClick={() => handleNavClick("/contact")}>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </div>
      </nav>

      {/* عرض اللودر أثناء التنقل */}
      {isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
        </div>
      )}
    </>
  );
}

export default Navbar;
