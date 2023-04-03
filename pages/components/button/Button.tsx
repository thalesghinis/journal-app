import { StyledButton } from "./StyledButton";
import PropTypes from 'prop-types';
import React from "react";


// type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonProps = {
    buttonName: string; 
    handleClick: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ buttonName, handleClick }) => (
    <StyledButton
      onClick={handleClick}
    >
      {buttonName}
    </StyledButton>
  );
  
export default Button;


/*
export default function Button ({ buttonName, handleClick }: {buttonName: string}) {
    return(
        <StyledButton type="button" onClick={handleClick}>{buttonName}</StyledButton>
    )
}

Button.propTypes = {
    buttonName: PropTypes.element.isRequired,
    handleClick: PropTypes.element.isRequired
};

type Button = {
    buttonName: string; 
    handleClick: button;
}

*/