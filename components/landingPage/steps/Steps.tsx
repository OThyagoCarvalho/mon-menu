import styles from './Steps.module.scss';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdOutlineMenuBook } from 'react-icons/md';
import { IoQrCode } from 'react-icons/io5';

export default function Steps() {
    return (
        <div className={styles.container}>
            <div className={'maxContentContainer'}>
                <div className={styles.stepsContainer}>
                    <div className={styles.step}>
                        <BsFillPersonLinesFill className={styles.stepIcon} />
                        <div className={styles.stepText}>
                            <h3> 1. Crie sua conta gratuitamente</h3>
                            <p>
                                Registre as informações do seu estabelecimento
                                em poucos minutos
                            </p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <MdOutlineMenuBook className={styles.stepIcon} />
                        <div className={styles.stepText}>
                            <h3> 2. Faça login e crie seu menu </h3>
                            <p>
                                O plano gratuito dá direito a 1 menu, sem
                                restrição de produtos ou categorias
                            </p>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <IoQrCode className={styles.stepIcon} />
                        <div className={styles.stepText}>
                            <h3> 3. Baixe seu QrCode</h3>
                            <p>
                                Disponibilize seu qrCode nas mesas do seu
                                estabelecimento e cole o Link nas suas redes
                                socias
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
