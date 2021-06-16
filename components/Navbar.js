import styles from "../styles/Header.module.css"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/"><a>Home</a></Link>
            </div>
            <ul>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/events">
                    <a>My Events</a>
                </Link>
            </ul>
        </div>
    )
}
