import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navdiv}>
            <img className={styles.logoImage} src="/atalbridge.png" alt="Atal Bridge" />
            <p className={styles.logo}>
            ahmedabad.<span className={styles.wiki}>wiki</span>
            </p>
        </div>
    );
  }
