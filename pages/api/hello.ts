// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import NormalizeCategories from '../../utils/stringUtils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        console.log(req.body);
        const { userId, menuName, categories } = req.body;
        let catArray = [] as {}[];

        categories.forEach((category: string) => {
            catArray.push({ label: category });
        });
        // const updateUser = await prisma.user
        //     .update({
        //         where: {
        //             id: req.body.userId
        //         },
        //         data: {
        //             menu_list: {
        //                 create: {
        //                     name: menuName,
        //                     categories: {}
        //                 }
        //             }
        //         }
        //     })
        //     .then(data => console.log(data));
        res.status(200).json(
            'Dados Salvos: ' + menuName + ' ' + JSON.stringify(catArray)
        );
    } else {
        res.status(400).json('Bad Request');
    }
}
