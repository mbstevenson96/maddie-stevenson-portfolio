import { Link } from "react-router-dom";
import styles from './NavBar.module.css'


const NavBar = () => {
  return ( 
    // <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to='/' className={styles.navLink}>Home</Link>
        <Link to='/about' className={styles.navLink}>About</Link>
        <Link to='/contact' className={styles.navLink}>Contact</Link>
        <Link to='/projects' className={styles.navLink}>Projects</Link>
        <Link to='/resume' className={styles.navLink}>Resume</Link>
      </div>
    // </nav>
  );
}

export default NavBar;