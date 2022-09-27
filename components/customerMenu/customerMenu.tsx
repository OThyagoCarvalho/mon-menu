import Image from 'next/image';
import { MenuPageProps } from '../../pages/menu/[...menuInfo]';
import styles from './customerMenu.module.scss';

interface CustomerMenuProps extends MenuPageProps {}

export default function CustomerMenu({
    name,
    motto,
    menu_list
}: CustomerMenuProps) {
    const { banner_pic_url, categories } = menu_list[0];

    const bannerUrl = banner_pic_url as unknown as string;

    return (
        <div className={styles.container}>
            <div className={styles.maxContentContainer}>
                <div className={styles.bannerPicContainer}>
                    <Image
                        src={bannerUrl}
                        alt={`banner do restaurante ${name}`}
                        width={450}
                        height={250}
                    />
                </div>
                <div className={styles.menuContainer}>
                    <div className={styles.nameContainer}>
                        <h1>{name}</h1>
                    </div>
                    <div className={styles.mottoContainer}>
                        <p>{motto}</p>
                    </div>
                    <hr className={styles.divider}></hr>
                    <div className={styles.categoriesContainer}>
                        <button className={styles.categoryButton} type="button">
                            todos
                        </button>
                        {categories.map(category => (
                            <div key={category.id}>
                                <button
                                    className={styles.categoryButton}
                                    type="button"
                                >
                                    {category.label}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className={styles.productsContainer}>
                        {categories.map(({ products }) =>
                            products.map((product: any) => (
                                <div
                                    key={product.id}
                                    className={styles.productContainer}
                                >
                                    <div
                                        className={styles.productImageContainer}
                                    >
                                        <img
                                            src={product.product_pic_url}
                                            alt={product.name}
                                        />
                                    </div>
                                    <p> {product.name} </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
