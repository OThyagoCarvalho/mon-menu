import styles from './BePremium.module.scss';

export default function BePremium() {
    return (
        <div className={styles.container}>
            <div className='maxContentContainer'>
                <div className={styles.bePremiumContainer}>
                    <div className={styles.bePremiumText}>
                        <h2> Faça Mais com a Assinatura Premium </h2>
                        <p>
                            Seu Estabelecimento possui mais de um cardápio? Crie
                            até um menu para cada dia da semana, escolha cores
                            de destaque que combinam com sua identidade visual,
                            aplique promoções em lote, e obtenha suporte.
                        </p>
                    </div>
                    <div className={styles.bePremiumCardsContainer}>
                        <div className={styles.bePremiumCard}>
                            <ul>
                                <li>
                                    <h3> Cardápios Ilimitados </h3>
                                </li>
                                <li>
                                    <h3> Personalização </h3>
                                </li>
                                <li>
                                    <h3> Suporte dentro de 24h </h3>
                                </li>
                            </ul>

                            <h3> Mon-menu Premium </h3>
                            <p>
                                R$ 14,90/mês
                                <span>
                                    <button type="button">Em Breve</button>
                                </span>
                            </p>
                        </div>
                        <div className={styles.bePremiumCard}>
                            <ul>
                                <li>
                                    <h3>
                                        {' '}
                                        Gostou, mas está sem tempo para
                                        cadastrar todos os itens do seu menu? A
                                        gente cadastra para você!{' '}
                                    </h3>
                                </li>
                            </ul>

                            <h3> Assistência Mon-menu </h3>
                            <p>
                                R$ 99,90/ parcela única
                                <span>
                                    <button type="button">Falar conosco</button>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
