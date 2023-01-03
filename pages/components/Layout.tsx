import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
        </Head>
         <Navbar/>
         <main>{children}</main>   
         <Footer/>      
        </>
    )
}