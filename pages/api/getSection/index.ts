import { RowDataPacket } from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';

import { connect } from '../../../connection';

export default (
    req: NextApiRequest, 
    res: NextApiResponse
) => {
    const method = req.method;

    if(method === 'POST') {
        const { id_user } = req.body;
        const sql = `SELECT * FROM sections WHERE id_user = ${id_user}`;
        
        connect.query(sql, (error, results: RowDataPacket[]) => {
            if(results.length >= 1) {
                return res.send({
                    error: false,
                    message: 'Seções retornadas',
                    results
                })
            }

            if(results.length <= 0) {
                return res.send({
                    error: false,
                    message: 'Esse usuário não tem nenhuma retornadas',
                    results
                })
            }
        })
    }
} 