import CreateMenuBlock from '../../components/dashboard/blocks/CreateMenuBlock';
import GreetingsBlock from '../../components/dashboard/blocks/GreetingsBlock';
import QrCodeBlock from '../../components/dashboard/blocks/QrCodeBlock';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import styles from '../../styles/DynamicDashboardPage.module.scss';

const menuList: Menu[] = [
    {
        menuId: '1231333',
        menuName: 'Menu Blabla',
        menuDescription: 'Este é o menu blablabla',
        menuUrl: 'http://localhost:3000/menu/blalala'
    }
];

export default function Dashboard() {
    return (
        <main className={styles.mainContentContainer}>
            <Sidebar />
            <div className={styles.dashboardBlocksContainer}>
                <GreetingsBlock name="Restautante do Tigas" />
                <QrCodeBlock menuName={menuList[0].menuUrl} />
                <CreateMenuBlock menuList={menuList} />
            </div>
        </main>
    );
}
