import { NextApiRequest, NextApiResponse } from 'next';

import jwt from 'jsonwebtoken';
import { config } from '../../../../config/jwt';

export default (
    req: NextApiRequest, 
    res: NextApiResponse
) => {
    const method = req.method;

    if(method === 'POST') {
        const { token } = req.body;
        try{
            jwt.verify(token, config.secret) &&
            res.send({
                error: false,
                message: 'Usuário permitido'
            }) 

        } catch(error) {
            return res.send({
                error: true,
                message: 'Usuário não permitido'
            }) 
        }
    }
}