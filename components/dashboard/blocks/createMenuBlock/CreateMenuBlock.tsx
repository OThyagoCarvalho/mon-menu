import { Paper, Modal, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { BsJournalPlus } from 'react-icons/bs';
import { BiFoodMenu } from 'react-icons/bi';
import styles from './CreateMenuBlock.module.scss';
import '../../../../utils/stringUtils';
import NormalizeCategories from '../../../../utils/stringUtils';
import axios from 'axios';

interface CreateMenuBlockProps {
    userId: number;
    menu_list: Menu[];
}

export default function CreateMenuBlock({
    userId,
    menu_list
}: CreateMenuBlockProps) {
    // handling modal visibility and preventing closing when clicking on the backdrop
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = (
        reason: 'backdropClick' | 'escapeKeyDown' | 'clickCloseButton'
    ) => {
        if (reason && reason === 'backdropClick') {
            return;
        }
        return setOpen(false);
    };

    //handling form inputs and submission
    const [menuName, setMenuName] = useState('');
    const [categories, setCategories] = useState('');
    const handleFormSubmit = async (
        userId: number,
        menuName: string,
        categories: string[]
    ) => {
        axios
            .post('/api/hello', {
                userId,
                menuName,
                categories
            })
            .then(res => console.log(res));

        setMenuName('');
        setCategories('');
    };

    // handling component render based on lenght of the prop passed
    if (menu_list.length === 0) {
        return (
            <Paper className={styles.blockWrapper} elevation={3}>
                <div className={styles.col}>
                    <div className={styles.blockHeader}>
                        <h3> Você ainda não criou um Menu</h3>
                        <hr></hr>
                    </div>
                    <div className={styles.createMenuButton}>
                        <button
                            className={styles.button}
                            type="button"
                            onClick={handleOpenModal}
                        >
                            <BsJournalPlus /> Criar Menu
                        </button>
                    </div>
                </div>
                <Modal
                    open={open}
                    onClose={(_, reason) => handleCloseModal(reason)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className={styles.modalWrapper}
                >
                    <form className={styles.form}>
                        <TextField
                            id="menu-name"
                            label="Nome do Menu"
                            placeholder='Ex: "Menu de Sábado"'
                            variant="outlined"
                            className={styles.formInput}
                            value={menuName}
                            onChange={e => setMenuName(e.target.value)}
                        />
                        <p>
                            Adicione algumas categorias separando-as por
                            vírgula. Não se preocupe, você poderá editá-las mais
                            tarde
                        </p>
                        <TextField
                            id="menu-name"
                            label="Categorias"
                            placeholder='Ex: "Bebidas, Entradas, Pratos Executivos, "'
                            variant="outlined"
                            className={styles.formInput}
                            value={categories}
                            onChange={e => setCategories(e.target.value)}
                        />
                        <TextField
                            id="menu-banner-pic"
                            variant="outlined"
                            type="file"
                            className={styles.formInput}
                        />
                        <div>
                            <Button
                                className={styles.formButton}
                                onClick={() =>
                                    handleFormSubmit(
                                        userId,
                                        menuName,
                                        NormalizeCategories(categories)
                                    )
                                }
                            >
                                Salvar
                            </Button>
                            <Button
                                type="submit"
                                className={styles.formButton}
                                onClick={() =>
                                    handleCloseModal('clickCloseButton')
                                }
                            >
                                Cancelar
                            </Button>
                        </div>
                    </form>
                </Modal>
            </Paper>
        );
    }

    return (
        <Paper className={styles.blockWrapper} elevation={3}>
            <h3> Estes são os seus Menus</h3>
            <div className={styles.menuListContainer}>
                {menu_list.map(menu => (
                    <div
                        className={styles.menuContainer}
                        key={menu.id.toString()}
                    >
                        <BiFoodMenu className={styles.menuIcon} />
                        <p>
                            <span> #{menu.id.toString()}</span> {menu.name}
                        </p>
                    </div>
                ))}
                <div className={styles.menuContainer}>
                    <BiFoodMenu className={styles.menuIcon} />
                    <button className={styles.button} type="button">
                        <BsJournalPlus /> Seja Premium
                    </button>
                </div>
            </div>
        </Paper>
    );
}
