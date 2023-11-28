import styles from './Loader.module.css';
import loaderPng from "../../assets/loader.gif";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loaderPng} alt="Loading..." />
        </div>
    </div>,
    document.getElementById('loader')
  )
}

export default Loader;