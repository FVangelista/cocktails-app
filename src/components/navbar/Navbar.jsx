import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import logoNav from "../../assets/logoNav.svg";

import { scrollToSection } from "../../utils/utils";

function Navbar({ refs }) {
  const [isActive, setActive] = useState(false);

  const handleResize = () => window.innerWidth > 920 && setActive(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const handleLinks = (ref) => {
    setActive(false);
    scrollToSection(ref);
  };

  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={logoNav} alt="" />
        </div>

        <ul className={styles.menu}>
          <li onClick={() => scrollToSection(refs.homeRef)}>home</li>
          <li onClick={() => scrollToSection(refs.mainRef)}>Catalog</li>
          <li onClick={() => scrollToSection(refs.missionRef)}>reviews</li>
          <li onClick={() => scrollToSection(refs.footerRef)}>contact</li>
        </ul>

        <button
          onClick={() => scrollToSection(refs.formRef)}
          className={styles.btn}
        >
          preorder
        </button>

        <div className={styles.burgerWrapper}>
          <div onClick={handleClick} className={styles.burger}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>

      <div
        className={
          isActive
            ? `${styles.MobileNav} ${styles.active}`
            : `${styles.MobileNav}`
        }
      >
        <ul className={styles.menu}>
          <li onClick={() => handleLinks(refs.homeRef)}>home</li>
          <li onClick={() => handleLinks(refs.mainRef)}>Catalog</li>
          <li onClick={() => handleLinks(refs.missionRef)}>reviews</li>
          <li onClick={() => handleLinks(refs.footerRef)}>contact</li>
          <button
            onClick={() => handleLinks(refs.formRef)}
            className={styles.btn}
          >
            preorder
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
