import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import styles from '../../styles/Navbar.module.css';


export default function Navbar(){
    return(
        <header className={styles.header}>
            <p><span className="b">J</span></p>

            <input type="checkbox" id="menu_bar" className={styles.menu}/>
            <label htmlFor="menu_bar"><FontAwesomeIcon icon={faBars} className={styles.icon}></FontAwesomeIcon></label>

            <nav className={styles.navbar}>
                <ul>
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
        </header>
    )
}