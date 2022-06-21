import { createConnection } from 'mysql2';

export const connect = createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'mylivros'
})