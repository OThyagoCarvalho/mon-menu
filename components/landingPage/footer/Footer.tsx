import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={'maxContentContainer'}>
                <div className={styles.content}>
                    <div className={styles.footerHead}>
                        <div className={styles.logo}>
                            <h3> Mon-Menu</h3>
                        </div>
                        <div className={styles.motto}>
                            <h3 className={styles.motto}>
                                Seu Cardápio na Palma da Mão
                            </h3>
                        </div>
                    </div>
                    <hr className={styles.divider}></hr>
                </div>
            </div>
        </footer>
    );
}
