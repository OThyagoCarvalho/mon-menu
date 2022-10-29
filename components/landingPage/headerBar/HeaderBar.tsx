import { useSession, signIn, signOut } from 'next-auth/react';
import styles from './HeaderBar.module.scss';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import Link from 'next/link';

export default function HeaderBar() {
    const { data: session } = useSession();

    return (
        <header className={styles.headerContainer}>
            {!session ? (
                <div className={styles.maxContentContainer}>
                    <div className={styles.headerContentContainer}>
                        <h1> MMENU</h1>
                        <Link href="/authentication/login">
                            <button
                                className={styles.signInOutButton}
                            >
                                Entrar
                                <span>
                                    <BiLogIn />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className={styles.maxContentContainer}>
                    <div className={styles.headerContentContainer}>
                        <h1> MMENU</h1>
                        <div>
                            <button
                                className={styles.signInOutButton}
                                type="button"
                            >
                                <Link href="/dashboard/1">Dashboard</Link>
                            </button>

                            <button
                                className={styles.signInOutButton}
                                onClick={() => signOut()}
                            >
                                Sair
                                <span>
                                    <BiLogOut />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
