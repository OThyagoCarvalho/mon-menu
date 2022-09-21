import styles from './GreetingsBlock.module.scss';
import Paper from '@mui/material/Paper';

interface GreetingsBlockProps {
    name?: string;
    motto?: string;
}

export default function GreetingsBlock({ name, motto }: GreetingsBlockProps) {
    if (name && motto) {
        return (
            <div className={styles.mainContainer}>
                    <h1 className="">Olá, {name}</h1>
                    <p className="">{motto}</p>
                {/* <Paper elevation={3} className={styles.blockWrapper}>
                    
                </Paper> */}
            </div>
        );
    }
    return (
        <div className={styles.mainContainer}>
            <Paper elevation={3} className={styles.blockWrapper}>
                <h1 className="">Bem-vindo</h1>
                <p className="">Este é seu painel de controle</p>
            </Paper>
        </div>
    );
}
