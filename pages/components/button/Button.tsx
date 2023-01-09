import { StyledButton } from "./StyledButton";
import PropTypes from 'prop-types';
import React from "react";


// type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button ({ buttonName }: {buttonName: string}) {
    return(
        <StyledButton>{buttonName}</StyledButton>
    )
}

Button.propTypes = {
    buttonName: PropTypes.element.isRequired
};

type Button = {
    buttonName: string; 
}