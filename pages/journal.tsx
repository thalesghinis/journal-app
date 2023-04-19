import React, { useState } from 'react';
import {  StyledCentered } from "../styles/StyledGlobal"
import Link from "next/link";

export default function Dashboard() {
 
return (
    <>
        <StyledCentered>
          Nenhuma entrada nova?
          <br />
         <Link href="/dashboard">
         <button>Clique Aqui</button>
         </Link>
         </StyledCentered>
    </>
  )
}
