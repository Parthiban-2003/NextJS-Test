'use Client'

import Link from "next/link";
import Styles from "./NavBar.module.css";

export default function NavBarContents() {
    return (
        <header className={Styles.navbar_header}>
            <div className={Styles.left_header}>
                <h1>Web Techky</h1>
            </div>

            <nav className={Styles.right_header}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/technology">Technology</Link>
                <Link href="">Contact</Link>
            </nav>
        </header>
    );
}
