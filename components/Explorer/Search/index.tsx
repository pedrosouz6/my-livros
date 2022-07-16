import { useEffect, useState } from "react"

import { externalInstance } from '../../../config/axios/external';
import { ExplorerSearchResults } from "./Results";

import { ContainerSearch } from './style';
import { Input } from "../../Input";

export interface IitemsDatasBooks {
    id: string,
    volumeInfo: {
        title: string,
        subtitle: string,
        publishedDate: string,
        authors: string[],
        categories: string[],
        description: string,
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        language: string
        pageCount: number,
        industryIdentifiers: AlunosAprovados[],
        publisher: string
    }
}

interface AlunosAprovados {
    type: string,
    identifier: string
}

export function ExplorerSearch() {

    const [ nameBook, setNameBook ] = useState<string | null>(null);

    const [ datasBooks, setDatasBooks ] = useState([]);

    useEffect(() => {
        if(nameBook) {
            externalInstance.get(`/volumes?q=${nameBook}`)
            .then(response => response.data)
            .then(respost => {
                if(respost.items) {
                    setDatasBooks(respost.items);
                } else {
                    setDatasBooks([]);
                    console.log('nao')
                }
            })
        } else {
            console.log('vazio')
        }
    }, [nameBook])

    console.log(datasBooks);

    return (
        <ContainerSearch>
            <Input 
            placeholder="Pesquisar por livro"
            onChange={e => setNameBook(e.target.value)} />

            {
                datasBooks.length > 0 &&
                datasBooks.map((item: IitemsDatasBooks, key) => (
                    <ExplorerSearchResults key={key} id={item.id} volumeInfo={item.volumeInfo} />
                ))
            }
        </ContainerSearch>
    )
}