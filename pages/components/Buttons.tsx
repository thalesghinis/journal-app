import styles from '../../styles/Buttons.module.css';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Buttons(props: Props){
    return(
        <button className={styles.button} {...props}/>
    )
}