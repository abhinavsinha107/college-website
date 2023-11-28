import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.sbFooter} ${styles.sectionPadding}`}>
        <div className={styles.sbFooterLinks}>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Rankings</h4>
            <a href="/employer">
              <p>NIRF</p>
            </a>
            <a href="/healthplan">
              <p>ARIIA</p>
            </a>
            <a href="/individual">
              <p>IIC</p>
            </a>
            <a href="/individual">
              <p>NAAC</p>
            </a>
          </div>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Students</h4>
            <a href="/resources">
              <p>Clubs & Socities</p>
            </a>
            <a href="/testimonials">
              <p>Infrastructure</p>
            </a>
            <a href="/stv">
              <p>Campus Life</p>
            </a>
            <a href="/stv">
              <p>Hostel</p>
            </a>
            <a href="/stv">
              <p>Academic Facilities</p>
            </a>
          </div>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Quick Links</h4>
            <a href="/swingTech">
              <p>HR Policy</p>
            </a>
            <a href="/swingTech">
              <p>NISP</p>
            </a>
            <a href="/swingTech">
              <p>Alumni Incubation</p>
            </a>
            <a href="/swingTech">
              <p>Career</p>
            </a>
          </div>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Admissions</h4>
            <a href="/about">
              <p>Computing</p>
            </a>
            <a href="/press">
              <p>Engineering</p>
            </a>
            <a href="/career">
              <p>Management</p>
            </a>
            <a href="/contact">
              <p>Scholarship</p>
            </a>
          </div>
          <div className={styles.sbFooterLinksDiv}>
            <h4>Socials</h4>
            <div className={styles.socialMedia}>
              <p>
                <FaFacebook size={20} />
              </p>
              <p>
                <FaTwitter size={20} />
              </p>
              <p>
                <FaLinkedin size={20} />
              </p>
              <p>
                <FaInstagram size={20} />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.sbFooterBelow}>
          <div className={styles.sbFooterCopyright}>
            <p>@{new Date().getFullYear()} xyzCollege. All rights reserved.</p>
          </div>
          <div className={styles.sbFooterBelowLinks}>
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer