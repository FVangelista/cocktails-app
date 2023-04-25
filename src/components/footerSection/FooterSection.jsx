import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import styles from "./index.module.scss";
import logo from "../../assets/logo.svg";

function FooterSection({ refs }) {
  return (
    <div ref={refs.footerRef} className={styles.Footer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.info}>
        <span>&copy; Cocktails - by filippo</span>
      </div>
      <ul>
        <a className={styles.icon} href="https://github.com/FVangelista">
          <RiGithubLine />
        </a>
        <a
          className={styles.icon}
          href="https://linkedin.com/in/vangelistafilippo"
        >
          <RiLinkedinLine />
        </a>
      </ul>
    </div>
  );
}

export default FooterSection;
