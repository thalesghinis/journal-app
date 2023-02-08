import React from 'react';
import { StyledContainerDashboard, StyledFunctions, StyledContent, StyledText } from "../styles/StyledDashdobard"


export default function Dashboard() {
  return (
    <>
     <StyledContainerDashboard>
      <StyledFunctions></StyledFunctions>
      <StyledContent>
        <StyledText>
          Nenhuma entrada..... Criar algo novo?
        </StyledText>
      </StyledContent>
     </StyledContainerDashboard>
    </>
  )
}
