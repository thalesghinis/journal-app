import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


import { StyledHeader, StyledNavbar } from "./StyledNavbar";
import React from "react";


export default function Navbar(){
    return(
        <StyledHeader>
            <p><span className="b">J</span></p>

            <input type="checkbox" id="menu_bar"/>
            <label htmlFor="menu_bar">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </label>

            <StyledNavbar>
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
            </StyledNavbar>
        </StyledHeader>
    )
}