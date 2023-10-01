import NavBar from './NavBar';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Cook<span>IT</span><span>Up</span> </div>
      <NavBar />
    </div>
  )
}

export default Header;