import styles from './Header.module.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import {HiOutlineMenuAlt3} from "react-icons/hi"
import {FaTimes, FaUserCircle} from "react-icons/fa"
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';

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
  const [displayName, setDisplayName] = useState("");

  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const hideMenu = () => {
    setShowMenu(false);
  }

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  // Monitor currently signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName);
      } else {
        setDisplayName("");
      }
    });
  }, []);

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
              <a href="#">
                <FaUserCircle size={16}/>
                Hi, {displayName}
              </a>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
              <NavLink to="/" onClick={logoutUser}>
                Logout
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