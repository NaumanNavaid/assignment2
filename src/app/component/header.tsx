
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
   return (
    <header className={styles.header}>
     <li><Link href="/">Home</Link></li>
    <li><Link href="/about"> About</Link></li>
    <li><Link href="/contact">Contact</Link></li>



    </header>



   )
  



}
