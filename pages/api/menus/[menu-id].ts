import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import NormalizeCategories from '../../../utils/stringUtils';

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const updateUser = await prisma.user.update({
        where: {
            id: req.body.id
        },
        data: {
            menu_list: {
                create: {
                    name: req.body.name,
                    categories: req.body.categories
                }
            }
        }
    });

    res.status(200).json({ name: 'John Doe' });
}
