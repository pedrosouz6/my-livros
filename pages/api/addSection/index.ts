import { NextApiRequest, NextApiResponse } from 'next';

export default (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const tokenjwt = req.headers.authorization;

    if(tokenjwt) {
        const token = tokenjwt.split(' ')[1];
        // fazer a verificação do token

        const method = req.method;

        if(method === 'POST') {
            const { nameSection } = req.body;

            console.log(nameSection);
        } else {
            console.log('metodo errado');
        }
    }
}   