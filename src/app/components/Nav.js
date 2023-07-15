import React from 'react'
import styles from "@/app/styles/navbar.module.css"
import Link from 'next/link'
export default function Nav() {
    return (
        <nav className={styles.navbar}>
            <div >
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/">Home</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/About">About</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/Movies">Movies</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
