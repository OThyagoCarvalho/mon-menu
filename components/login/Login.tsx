import { Paper } from '@mui/material';
import { signIn } from 'next-auth/react';
import { BsGoogle } from 'react-icons/bs';
import styles from './Login.module.scss';

export default function LoginComponent() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <h1> Mon Menu</h1>
                <div>
                    <p>Entre com suas redes sociais</p>
                </div>
            </div>
            <Paper className={styles.innerContainer} elevation={6}>
                <div className={styles.socialLoginWrapper}>
                    <div className={styles.socialButtonsWrapper}>
                        {/* User authenticates via google openid - a request is sent to the pages/api/auth route, which redirects the user to the dashboard. if the login is successful */}
                        <button onClick={() => signIn('google')}>
                            <BsGoogle /> <span> Entrar com o Google</span>
                        </button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
