import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { signIn } from 'next-auth/react'


import { StyledHeader, StyledNavbar } from "./StyledNavbar";
import React from "react";


export default function Navbar(){
    return(
        <StyledHeader className="header relative flex items-center justify-between">
            <p>
                <span className="b">J</span>
            </p>

            <input type="checkbox" id="menu_bar" className="dn"/>
            <label htmlFor="menu_bar" className="dn">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </label>

            <StyledNavbar className="navbar ttc">
                <ul className="list">
                    <li className="relative fl">
                        <Link legacyBehavior href="/features"><a className="b db no-underline">Features</a></Link>
                    </li>
                    <li className="relative fl">
                        <Link legacyBehavior href="/"><a className="b db no-underline">Teste</a></Link>
                    </li>
                    <li className="relative fl">
                    <button onClick={() => {
                        signIn()
                    }}>login</button>
                    </li>
                </ul>
            </StyledNavbar>
        </StyledHeader>
    )
}