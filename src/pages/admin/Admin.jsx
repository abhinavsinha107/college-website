import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/admin/navbar/Navbar';
import styles from './Admin.module.css';
import Home from '../../components/admin/home/Home';
import ViewNews from '../../components/admin/viewNews/ViewNews';
import AddNews from '../../components/admin/addNews/AddNews';

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
      <Navbar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='all-news' element={<ViewNews />} />
          <Route path='add-news' element={<AddNews />} />
        </Routes>
      </div>
    </div>
  )
}
export default Admin;