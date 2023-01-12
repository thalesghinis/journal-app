import styled from 'styled-components';

 export const StyledButton = styled.button`
    font-size: 16px;
    padding: 14px;
    width: 100%;
    border: none;
    background-color: #c7d4e5;
    border-radius: 5px;
    cursor: pointer;
    color: #03395d;
    font-weight: bold;
    transition: .6s;
    margin-top: 40px;

    &:hover{
        background-color: #03395d;
        color: white;
    }

    /*@media(max-width: 959px){
        button{
            width: 70%;
        }
}*/
`