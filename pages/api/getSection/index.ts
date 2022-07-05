import { NextApiRequest, NextApiResponse } from 'next';

import { connect } from '../../../connection';

export default (
    req: NextApiRequest, 
    res: NextApiResponse
) => {
    const sql = 'SELECT * FROM sections';

    connect.query(sql, (error, results) => {
        if(results) {
            return res.send({
                error: false,
                message: 'Seções retornadas',
                results
            })
        }

        return res.send({
            error: true,
            message: 'Erro ao buscar as seções'
        })
    })
} 