import { IitemsDatasBooks } from '../';

import { 
    Cards,
    CardsLeft,
    CardsRight,
    AuthorName
} from "./style";

export function ExplorerSearchResults({ id, volumeInfo  }: IitemsDatasBooks) {

    

    return (
        <Cards>
            <CardsLeft>
                <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : '/favicon.png'} alt="Imagem do livro" />
                <button>Adicionar</button>
            </CardsLeft>
            <CardsRight>
                <h4>{ volumeInfo.title }</h4>

                { 
                    volumeInfo.authors 
                    ?
                    volumeInfo.authors.map((item, key) => (
                        <AuthorName key={key}>{ item }</AuthorName>
                    )) 
                    : 
                    <AuthorName>Autor Desconhecido</AuthorName>
                }

                <span>{ volumeInfo.publishedDate }</span>

                <span>{ volumeInfo.pageCount }</span>
                {
                    volumeInfo.industryIdentifiers &&
                        volumeInfo.industryIdentifiers.map(item => (
                            <span>{ item.type } - { item.identifier }</span>
                        ))
                }

                <p>{ volumeInfo.description }</p>

            </CardsRight>
        </Cards>
    )
} 