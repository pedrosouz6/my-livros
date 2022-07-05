import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../connection/index';
import { verify } from 'jsonwebtoken';
import { config } from '../../../config/jwt';

interface JwtPayload {
    id: string
}

export default (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    console.log(req.headers);
    const tokenjwt = req.headers.authorization;

    if(tokenjwt) {
        // fazer a verificação do token

        const method = req.method;

        if(method === 'POST') {
            const { nameSection } = req.body;
            const token = tokenjwt.split(' ')[1];

            try {
                const verifyToken = verify(token, config.secret) as JwtPayload;
                const { id } = verifyToken;

                const sql = `
                INSERT INTO sections (
                    id_user, 
                    name_section
                ) VALUES (
                    ${id},
                    '${nameSection}'
                )`;

                connect.query(sql, (error, results) => {
                    if(error) {
                        return res.send({
                            error: true,
                            message: 'Erro ao adicionar uma nova seção'
                        })
                    }

                    if(results) {
                        return res.send({
                            error: false,
                            message: 'Uma nova seção foi adicionada'
                        })
                    }
                })

    
            } catch(err) {
                return res.send({
                    error: true,
                    message: 'Erro ao adicionar uma nova seção'
                })
            }

        } else {
            console.log('metodo errado');
        }
    } else {
        return res.send({
            error: true,
            message: 'Para adicionar uma nova seção, você precisar tem autorização'
        })
    }
}   