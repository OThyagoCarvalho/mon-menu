import { Paper, Modal, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { BsJournalPlus } from 'react-icons/bs';
import styles from './CreateMenuBlock.module.scss';
import '../../../../utils/stringUtils';
import NormalizeCategories from '../../../../utils/stringUtils';
import prisma from '../../../../lib/prisma';
import axios from 'axios';

interface CreateMenuBlockProps {
    id: number;
    menu_list: Menu[];
}

export default function CreateMenuBlock({
    id,
    menu_list
}: CreateMenuBlockProps) {
    // handling modal visibility and preventing closing when clicking on the backdrop
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = (
        reason: 'backdropClick' | 'escapeKeyDown' | 'clickCloseButton'
    ) => {
        console.log(reason);
        if (reason && reason === 'backdropClick') {
            return;
        }
        return setOpen(false);
    };

    //handling form inputs and submission
    const [name, setName] = useState('');
    const [categories, setCategories] = useState('');
    const handleFormSubmit = async (name: string, categories: string[]) => {

        axios.post('/api/hello', {
            name: name,
            categories: categories
        })

    };

    // handling component render based on lenght of the prop passed
    if (menu_list.length === 0) {
        return (
            <Paper className={styles.blockWrapper} elevation={3}>
                <div className={styles.col}>
                    <div className={styles.blockHeader}>
                        <h2> Parece que você ainda não criou nenhum Menu</h2>
                        <hr></hr>
                    </div>
                    <div className={styles.createMenuButton}>
                        <button type="button" onClick={handleOpenModal}>
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
                            value={name}
                            onChange={e => setName(e.target.value)}
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
                                // onClick={handleFormSubmit}
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
            <div>
                {menu_list.map(menu => (
                    <div key={menu.id.toString()}>
                        <p>{menu.id.toString()}</p>
                        <p> {menu.name}</p>
                        <button type="button">
                            <BsJournalPlus /> Adicionar Outro Menu
                        </button>
                    </div>
                ))}
            </div>
        </Paper>
    );
}
