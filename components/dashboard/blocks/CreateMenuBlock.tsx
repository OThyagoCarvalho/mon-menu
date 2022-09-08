import { Paper } from '@mui/material';
import { BsJournalPlus } from 'react-icons/bs';

interface CreateMenuBlockProps {
    menuList: Menu[];
}

export default function CreateMenuBlock({ menuList }: CreateMenuBlockProps) {
    const handleAddNewMenu = () => {};

    return (
        <Paper elevation={6}>
            <div>
                {menuList.length > 0 ? (
                    menuList.map(menu => (
                        <div key={menu.menuId}>
                            <p> {menu.menuId}</p>
                            <p> {menu.menuName}</p>
                            <p> {menu.menuDescription}</p>
                            <a href={menu.menuUrl}> {menu.menuUrl}</a>
                            <button type="button">
                                <BsJournalPlus /> Adicionar Outro Menu
                            </button>
                        </div>
                    ))
                ) : (
                    <div>
                        <div> Você ainda não possui Menus </div>
                        <button type="button" onClick={handleAddNewMenu}>
                            <BsJournalPlus /> Adicionar Menu
                        </button>
                    </div>
                )}
            </div>
        </Paper>
    );
}
