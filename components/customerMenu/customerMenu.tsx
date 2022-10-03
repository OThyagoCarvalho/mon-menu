import { style } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MenuPageProps } from '../../pages/menu/[...menuInfo]';
import { FormatPrice } from '../../utils/stringUtils';
import styles from './customerMenu.module.scss';

interface CustomerMenuProps extends MenuPageProps {}

export default function CustomerMenu({
    name,
    motto,
    menu_list
}: CustomerMenuProps) {
    const { banner_pic_url, categories } = menu_list[0];
    const bannerUrl = banner_pic_url as unknown as string;

    const [selectedCategory, setSelectedCategory] = useState(0);

    const handleCategorySelection = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        console.log(typeof Number((e.target as HTMLButtonElement).value));
        setSelectedCategory(Number((e.target as HTMLButtonElement).value));
    };

    return (
        <div className={styles.container}>
            <div className={styles.maxContentContainer}>
                <div className={styles.bannerPicContainer}>
                    <img
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
                        <p>{`"${motto}"`}</p>
                    </div>
                    <hr className={styles.divider}></hr>
                    <div className={styles.categoriesContainer}>
                        <button
                            value={0}
                            className={styles.categoryButton}
                            type="button"
                            onClick={e => handleCategorySelection(e)}
                        >
                            todos
                        </button>
                        {categories.map(category => (
                            <div key={category.id}>
                                <button
                                    className={styles.categoryButton}
                                    type="button"
                                    value={category.id}
                                    onClick={e => handleCategorySelection(e)}
                                >
                                    {category.label}
                                </button>
                            </div>
                        ))}
                    </div>
                    <hr className={styles.divider}></hr>
                    <div className={styles.productsContainer}>
                        {categories.map(({ products }) =>
                            products.map(
                                selectedCategory === 0
                                    ? (product: any) => (
                                          <div
                                              key={product.id}
                                              className={
                                                  styles.productContainer
                                              }
                                          >
                                              <div
                                                  className={
                                                      styles.productImageContainer
                                                  }
                                              >
                                                  <img
                                                      src={
                                                          product.product_pic_url
                                                      }
                                                      alt={product.name}
                                                  />
                                              </div>
                                              <div
                                                  className={
                                                      styles.productInfoContainer
                                                  }
                                              >
                                                  <p
                                                      className={
                                                          styles.productName
                                                      }
                                                  >
                                                      {product.name.toLowerCase()}{' '}
                                                  </p>
                                                  <p
                                                      className={
                                                          styles.productDescription
                                                      }
                                                  >
                                                      {product.description}
                                                  </p>
                                                  <p
                                                      className={
                                                          styles.productPrice
                                                      }
                                                  >
                                                      {FormatPrice.format(
                                                          product.price
                                                      )}
                                                  </p>
                                              </div>
                                          </div>
                                      )
                                    : (product: any) =>
                                          product.categoryId ===
                                              selectedCategory && (
                                              <div
                                                  key={product.id}
                                                  className={
                                                      styles.productContainer
                                                  }
                                              >
                                                  <div
                                                      className={
                                                          styles.productImageContainer
                                                      }
                                                  >
                                                      <img
                                                          src={
                                                              product.product_pic_url
                                                          }
                                                          alt={product.name}
                                                      />
                                                  </div>
                                                  <div
                                                      className={
                                                          styles.productInfoContainer
                                                      }
                                                  >
                                                      <p
                                                          className={
                                                              styles.productName
                                                          }
                                                      >
                                                          {product.name.toLowerCase()}{' '}
                                                      </p>
                                                      <p
                                                          className={
                                                              styles.productDescription
                                                          }
                                                      >
                                                          {product.description}
                                                      </p>
                                                      <p
                                                          className={
                                                              styles.productPrice
                                                          }
                                                      >
                                                          {FormatPrice.format(
                                                              product.price
                                                          )}
                                                      </p>
                                                  </div>
                                              </div>
                                          )
                            )
                        )}
                        <div className={styles.footer}>
                            
                            <div className={styles.footerDetail}>
                                criado com: <Link href="/"> mon-menu </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
