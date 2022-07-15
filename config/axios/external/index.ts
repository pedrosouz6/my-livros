import axios from 'axios';

export const externalInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/'
})