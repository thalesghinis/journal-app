import Head from "next/head";
import Footer from "./footer/Footer";
import Navbar from "../components/navbar/Navbar";


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
        </Head>
         <Navbar/>
         <main>{children}</main>  
         <Footer/>
        </>
    )
}