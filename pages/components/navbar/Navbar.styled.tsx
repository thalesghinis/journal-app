import styled from "styled-components";

export const StyledHeader = styled.header`
    position:relative;
    top: 0;
    left: 0;
    right: 0;
    background-color: #e7f5fe;
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    padding: 0 7em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    color: #03395d;
    
    span{
        font-size: 5em;
    }

    label{
        font-size: 20px;
        color: black;
        cursor: pointer;
        display: none;
        font-size: 2rem;
        color: #03395d;
    }

    input{
        display: none;
    }

    @media(max-width:991px){
        label{
        display: initial;
    }

    input:checked~ul{
        display: initial;
    }
    }
`

export const StyledNavbar = styled.ul`
    text-transform: capitalize;

    li{
        position: relative;
        float: left;
        margin-right: 1.3rem;
        list-style: none;
    }

    li a{
        font-weight: bold;
    font-size: 1.5em;
    padding: 5px;
    color: #03395d;
    display: block;
    text-decoration: none;
    transition: .4s;
    border-bottom: 2px solid transparent;
    }

    li a:hover{
        border-color: #03395d;
    }

    @media(max-width:991px){
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #e7f5fe;
        border-top: 1px solid rgba(0,0,0,.1);
        border-bottom: 1px solid rgba(0,0,0,.1);
        display: none;
        text-align: center;

        li{
            width: 100%;
        }
    }
`