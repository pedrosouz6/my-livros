import { NextApiRequest, NextApiResponse } from 'next';

import { OkPacket } from 'mysql2';
import jwt from 'jsonwebtoken';

import { config } from '../../../config/jwt';

import { connect } from '../../../connection';

export default (
    req: NextApiRequest, 
    res: NextApiResponse
) => {

    const method = req.method;

    if(method === 'POST') {
        const { name, email, password } = req.body;
        
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

        connect.query(sql, (error, results: OkPacket) => {
            if(results) {
                return res.send({
                    error: false,
                    message: 'Usuário cadastrado',
                    user: {
                        name
                    },
                    token: jwt.sign(
                        {id: results.insertId},
                        config.secret,
                        {expiresIn: config.expireIn}
                    )       
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