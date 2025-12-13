import Link from 'next/link';
import Styles from './NavBar.module.css';

function NavBarContents() {
    return (
        <header className={Styles.navbar_header}>
            <div className={Styles.left_header}>
                <h1>Web Techky</h1>
            </div>
            <div className={Styles.right_header}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/Content">Content Pages</Link>
                <Link href="/Contact">Contact</Link>
            </div>
        </header>
    );
}

export default NavBarContents;
