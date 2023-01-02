import Link from "next/link";

import styles from '../../styles/Navbar.module.css';


export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>
                <p><span>J</span></p>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link legacyBehavior href="/"><a>Teste</a></Link>
                </li>
                <li>
                    <Link legacyBehavior href="/"><a>Teste</a></Link>
                </li>
                <li>
                    <Link legacyBehavior href="/"><a>Teste</a></Link>
                </li>
            </ul>
        </nav>
    )
}