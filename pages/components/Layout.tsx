import Head from "next/head";
import Footer from "./footer/Footer";
import Navbar from "../components/navbar/Navbar";
import React from "react";


type ChildrenProps = {
    onClick(): void;
    name: string;
    children: React.ReactNode;
  };


export default function Layout({children} : ChildrenProps){
    return(
        <>
        <Head>
            <title>Journal App</title>
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"  />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;800&display=swap" rel="stylesheet"/>
        </Head>
         <Navbar/>
         <div style={{minHeight: '80vh', position: 'relative'}}>
            <main>{children}</main>
         </div>
         <Footer/>
        </>
    )
}

// <main>{children}</main>  //