import { Box } from '@mui/material';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {
    BiFoodMenu,
    BiHomeCircle,
    BiHeartSquare,
    BiSupport,
    BiPieChartAlt2,
    BiMobile,
    BiDoorOpen
} from 'react-icons/bi';
import styles from './Sidebar.module.scss';
import SidebarLinkButton from './SidebarLinkButton';

const sidebarLinks = [
    {
        label: 'Início',
        icon: <BiHomeCircle />
    },
    {
        label: 'Pré-visualizar',
        icon: <BiMobile />
    },
    {
        label: 'Suporte',
        icon: <BiSupport />
    },
    {
        label: 'Sair',
        icon: <BiDoorOpen />,
        onClick: () => signOut()
    }
];

export default function Sidebar() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                width: 'fit-content',
                minWidth: '350px'
            }}
        >
            <div className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <h1 style={{ margin: '0' }}> Mon Menu </h1>
                </div>
                {sidebarLinks.map((link, index) => (
                    <SidebarLinkButton key={index} {...link} />
                ))}
            </div>
        </Box>
    );
}
