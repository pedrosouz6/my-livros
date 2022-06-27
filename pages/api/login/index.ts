import { NextApiResponse, NextApiRequest } from 'next';
import { RowDataPacket } from 'mysql2';

import { connect } from '../../../connection';

export default (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    const method = req.method;

    if(method === 'POST') {
        const { email, password } = req.body;

        const sql = `SELECT * FROM users WHERE email_user = '${email}' && password_user = '${password}'`;

        connect.query(sql, (error, results: RowDataPacket[]) => {
            if(error) {
                return console.log(error);
            }

            console.log(results);

            if(results.length === 0) {
                return res.send({   
                    error: true,
                    message: 'Usuário não existe no banco de dados'
                })
            }

            if(results.length === 1) {
                return res.send({   
                    error: false,
                    message: 'Usuário logado'
                })
            }
        })
    }

    if(method === 'GET') {
        res.send('login get')
    }
}