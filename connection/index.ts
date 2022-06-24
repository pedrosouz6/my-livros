import { createConnection } from 'mysql2';

export const connect = createConnection({
    host: process.env.NEXT_PUBLIC_HOST_NAME,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    user: process.env.NEXT_PUBLIC_NAME_USER,
    database: process.env.NEXT_PUBLIC_DB_NAME
})