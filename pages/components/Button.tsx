import styles from '../../styles/Button.module.css';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button(props: Props){
    return(
        <button className={styles.button} {...props}/>
    )
}