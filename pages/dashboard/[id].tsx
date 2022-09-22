import { GetServerSideProps } from 'next';
import CreateMenuBlock from '../../components/dashboard/blocks/createMenuBlock/CreateMenuBlock';
import GreetingsBlock from '../../components/dashboard/blocks/greetingsBlock/GreetingsBlock';
import QrCodeBlock from '../../components/dashboard/blocks/QrCodeBlock';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import styles from '../../styles/DashboardPage.module.scss';
import prisma from '../../lib/prisma';

interface DashboardPageProps {
    userId: number;
    name: string;
    motto: string;
    email: string;
    profile_pic_url: string;
    is_premium: boolean;
    menu_list: Menu[];
}

export default function Dashboard({
    userId,
    name,
    motto,
    menu_list
}: DashboardPageProps) {
    
    return (
        <main className={styles.mainContentContainer}>
            <Sidebar />
            <div className={styles.dashboardBlocksContainer}>
                <div className={styles.dashboardRow}>
                    <GreetingsBlock name={name} motto={motto} />
                </div>
                <div className={styles.dashboardRow}>
                    <CreateMenuBlock userId={userId} menu_list={[]} />
                    {/* <QrCodeBlock menuName={name} /> */}
                </div>
            </div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const userData = await prisma.user.findUnique({
        where: { id: 1 },
        include: {
            menu_list: {
                include: { categories: { include: { products: {} } } }
            }
        }
    });

    
    return {
        props: {
            userId: userData?.id,
            name: userData?.name,
            motto: userData?.motto,
            email: userData?.email,
            profile_pic_url: userData?.profile_pic_url,
            is_premium: userData?.is_premium,
            menu_list: userData?.menu_list
        }
    };
};
