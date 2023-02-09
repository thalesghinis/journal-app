import styled from "styled-components";

export const StyledMain = styled.div`
    padding: 10px;
`

export const StyledBgColor = styled.div`
    background-color: #e7f5fe;
    border-radius: 40px;
    min-height: 749px;
`

export const StyledImage = styled.img`
    transform: translateX(-30%);
`

export const StyledJournal = styled.div`
    margin: 0 auto;
    padding: 40px;
    color: #03395d;
    h1{
        letter-spacing: 5px;
        font-size: 80px;
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;
        margin-bottom: 20px
    }

    p {
        color: #03395d;
        font-size: 18px;
        font-weight: 300;
    }

    .btn_component{
        gap: 20px;
        margin-top: 0;
    }
`

export const StyledAligned = styled.div`
    color: #03395d;
    margin: 4em auto;

    h2{
        font-size: 2.4em;
    }

    p {
        margin-top: 1em;
    }
`