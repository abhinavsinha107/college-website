import styles from './Header.module.css';
import { Link, NavLink } from "react-router-dom";
import {HiOutlineMenuAlt3} from "react-icons/hi"
import {FaTimes} from "react-icons/fa"
import { useState } from 'react';

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>xyzCollege</h2>
    </Link>
  </div>
);

const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const hideMenu = () => {
    setShowMenu(false);
  }

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles.showNav}` : `${styles.hideNav}`}>
          <div
            className={
              showMenu
                ? `${styles.navWrapper} ${styles.showNavWrapper}`
                : `${styles.navWrapper}`
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles.logoMobile}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className={styles.headerRight} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
            </span>
          </div>
        </nav>
        <div className={styles.menuIcon}>
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
}
export default Header