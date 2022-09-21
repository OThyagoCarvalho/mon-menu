import { Box } from '@mui/material';
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
                <SidebarLinkButton icon={<BiHomeCircle />} label="Início" />
                <SidebarLinkButton icon={<BiFoodMenu />} label="Menus" />
                <SidebarLinkButton icon={<BiPieChartAlt2 />} label="Análises" />
                <SidebarLinkButton icon={<BiMobile />} label="Pré-visualizar" />
                <SidebarLinkButton icon={<BiSupport />} label="Suporte" />

                <SidebarLinkButton icon={<BiDoorOpen />}>
                    {' '}
                    <Link href="/authentication/login"> Sair</Link>
                </SidebarLinkButton>
            </div>
        </Box>
    );
}
