import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="/images/hero-pexels-pixabay-260922.webp"
                    alt="hero"
                    layout="fill"
                    objectFit="cover"                    
                    style={{ filter: 'brightness(0.5)' }}
                />
            </div>
            <div className={styles.heroText}>
                <h1>                    
                    Seu cardápio digital ao alcance do seu cliente
                </h1>
                <button type='button' className={styles.heroButton}> Saber mais </button>
            </div>
        </div>
    );
}
