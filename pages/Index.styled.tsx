import styled from "styled-components";

export const StyledBgColor = styled.div`
    background-color: #e7f5fe;
`

export const StyledImage = styled.img`
    transform: translateX(-30%);
`

export const StyledJournal = styled.div`
    max-width: 550px;
    margin: 0 auto;

    h1{
        letter-spacing: 5px;
    }

    h1,p{
        color: #03395d;
    }

    button{
        gap: 20px;
    }

    @media(min-width:960px){
        p{
            font-size: 1.6rem;
        }
    }

    @media(max-width:959px){
        text-align: center;
    }

    @media(max-width:768px){
        h1{
            font-size: 4rem;
        }
    }

    @media(max-width:576px){
        h1{
            font-size: 3rem;
        }
    }
`

export const StyledAligned = styled.div`
    color: #03395d;
    width: 30%;
    margin: 15em auto;

    h2{
        font-size: 2.4em;
    }

    p{
        margin-top: 1em;
    }
`