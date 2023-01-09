import { StyledButton } from "./Button.styled";

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button(props: Props){
    return(
        <StyledButton {...props}/>
    )
}