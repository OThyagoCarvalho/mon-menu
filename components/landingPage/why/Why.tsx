import styles from './Why.module.scss';
import { SiCashapp } from 'react-icons/si';
import { ImLeaf } from 'react-icons/im';
import { BsFillClockFill } from 'react-icons/bs';
import { MdReviews } from 'react-icons/md';

export default function Why() {
    return (
        <div className={styles.container}>
            <div className={'maxContentContainer'}>
                <div className={styles.whyContainer}>
                    <div className={styles.whyText}>
                        <h2> Por que usar Menus QrCode? </h2>
                        <p>
                            Além da convêniência do mundo digital, os Menus
                            QrCode trazem várias vantagens para o seu negócio
                        </p>
                        <div className={styles.whyCardsContainer}>
                            <div className={styles.whyCard}>
                                <SiCashapp className={styles.whyCardIcon} />
                                <h3 className={styles.whyCardTitle}>
                                    Economia
                                </h3>
                                <p>
                                    Um cardápio personalizado em PVC com 1 folha
                                    frente e verso pode chegar a custar R$ 50,00
                                    a unidade
                                </p>
                            </div>
                            <div className={styles.whyCard}>
                                <ImLeaf className={styles.whyCardIcon} />
                                <h3 className={styles.whyCardTitle}>
                                    Sustentabilidade
                                </h3>
                                <p>
                                    Reduz o consumo de papel eliminando a
                                    necessidade de renovação de cardápios
                                    manchados, sujos ou desgastados
                                </p>
                            </div>
                            <div className={styles.whyCard}>
                                <BsFillClockFill
                                    className={styles.whyCardIcon}
                                />
                                <h3 className={styles.whyCardTitle}>
                                    Agilidade
                                </h3>
                                <p>
                                    Atualize seus preços e produtos em poucos
                                    minutos, sem precisar imprimir novos
                                    cardápios
                                </p>
                            </div>
                            <div className={styles.whyCard}>
                                <MdReviews className={styles.whyCardIcon} />
                                <h3 className={styles.whyCardTitle}>
                                    Entenda o público <span> em breve </span>
                                </h3>
                                <p>Descubra os produtos mais bem avaliados</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.whyImage}>
                        <img src="/images/sample.png" alt="why" />
                    </div>
                </div>
            </div>
        </div>
    );
}
