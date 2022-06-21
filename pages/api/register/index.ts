import { NextApiRequest, NextApiResponse } from 'next';

import { RowDataPacket } from 'mysql2';

import { connect } from '../../../connection';

export default (
    req: NextApiRequest, 
    res: NextApiResponse
) => {

    const method = req.method;

    console.log(method);

    if(method === 'POST') {
        const { name, email, password } = req.body;
        console.log({ name, email, password });
        
        const sql = `
        INSERT INTO users (
            name_user, 
            email_user, 
            password_user
        ) VALUES (
            '${name}',
            '${email}',
            '${password}'
        )`;

        connect.query(sql, (error, results: RowDataPacket[]) => {
            if(results) {
                return res.send({
                    error: false,
                    message: 'Usuário cadastrado'
                });
            }
    
            if(error) {
                return res.send({
                    error: true,
                    message: 'Erro ao cadastrar usuário'
                });
            }
        })
    } else {
        res.send({
            error: true,
            message: 'O metódo para cadastrar um usuário deve ser POST'
        })  
    }

}