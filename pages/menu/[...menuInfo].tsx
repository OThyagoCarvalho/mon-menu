import { User } from '@prisma/client';
import { GetServerSideProps } from 'next';
import CustomerMenu from '../../components/customerMenu/customerMenu';
import prisma from '../../lib/prisma';

export interface MenuPageProps {
    name: string;
    motto: string;    
    menu_list: Menu[];
}

export default function MenuPage({ name, motto, menu_list }: MenuPageProps) {
    console.log(menu_list);

    const bannerUrl = menu_list[0].banner_pic_url as unknown as string;

    return (
        <>
            <CustomerMenu
                name={name}
                motto={motto}                
                menu_list={menu_list}
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const data = await prisma.user.findUnique({
        where: {
            id: Number(query.uid)
        },
        include: {
            menu_list: {
                where: { id: Number(query.mid) },
                include: { categories: { include: { products: {} } } }
            }
        }
    });

    console.log(data);
    return {
        props: {
            name: data?.name,
            motto: data?.motto,
            menu_list: data?.menu_list
        }
    };
};
