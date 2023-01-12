import styled from "styled-components";

export const StyledHeader = styled.header`
    /*top: 0;
    left: 0;
    right: 0;*/
    background-color: #e7f5fe;
    padding: 0 7em;
    z-index: 1000;
    color: #03395d;
    
    span{
        font-size: 5em;
    }

    label{
        cursor: pointer;
        font-size: 2rem;
        color: #03395d;
    }
`

export const StyledNavbar = styled.ul`
    li{
        margin-right: 1.3rem;
    }

    li a{
        font-size: 1.5em;
        padding: 5px;
        color: #03395d;
        transition: .4s;
        border-bottom: 2px solid transparent;
    }

    li a:hover{
        border-color: #03395d;
    }
`