import styles from './GreetingsBlock.module.scss';
import Paper from '@mui/material/Paper';

interface GreetingsBlockProps {
    name?: string;
    motto?: string;
}

export default function GreetingsBlock({
    name = '',
    motto = ''
}: GreetingsBlockProps) {
    if (name && motto) {
        return (
            <div className={styles.mainContainer}>
                <h1>
                    <span> Olá, </span>
                    {name}
                </h1>
                <p>{motto}</p>
            </div>
        );
    }

    if (name && !motto) {
        return (
            <div className={styles.mainContainer}>
                <h1>
                    <span> Olá, </span>
                    {name}
                </h1>
                <p>Este é seu painel de controle</p>
            </div>
        );
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.blockWrapper}>
                <h1>Bem-vindo</h1>
                <p>Este é seu painel de controle</p>
            </div>
        </div>
    );
}
