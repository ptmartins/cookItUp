import Header from './Header';
import Footer from './Footer'; 
import styles from '@/styles/Layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.mainWrapper}>
        <Header className={styles.header} />
        <main className={styles.main} >{children}</main>
        <Footer className={styles.footer} />
    </div>
  )
}


export default Layout; 
