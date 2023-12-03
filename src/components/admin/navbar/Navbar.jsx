import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { selectUserName } from '../../../redux/slice/authSlice';
import { NavLink } from 'react-router-dom';

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Navbar = () => {
    const userName = useSelector(selectUserName);

  return (
    <div className={styles.navbar}>
      <div className={styles.user}>
        <FaUserCircle size={40} color="#fff" />
        <h4>{userName}</h4>
      </div>
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/admin/home" className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/all-news" className={activeLink}>
              All News
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-news" className={activeLink}>
              Add News
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar