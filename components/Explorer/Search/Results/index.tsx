import { IitemsDatasBooks } from '../';

import { 
    Cards,
    CardsLeft,
    CardsRight,
    TitleBook,
    Authors,
    AuthorName,
    PublishedDate,
    PageCount,
    IndustryIdentifiers,
    Description,
    Publisher
} from "./style";

export function ExplorerSearchResults({ id, volumeInfo  }: IitemsDatasBooks) {

    return (
        <Cards>
            <CardsLeft>
                <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : '/favicon.png'} alt="Imagem do livro" />
                <button>Adicionar</button>
            </CardsLeft>
            <CardsRight>
                <TitleBook>{ volumeInfo.title }</TitleBook>

                <Authors>
                    { 
                        volumeInfo.authors 
                        ?
                        volumeInfo.authors.map((item, key) => (
                            <AuthorName key={key}>{ item }{ volumeInfo.authors.length === key + 1 ? '.' : ',' }</AuthorName>
                        )) 
                        : 
                        <AuthorName>Autor Desconhecido</AuthorName>
                    }
                </Authors>

                <PublishedDate>
                    <strong>Publicado em:</strong> 
                    { volumeInfo.publishedDate }
                </PublishedDate>

                <Publisher>({ volumeInfo.publisher })</Publisher>

                <PageCount><strong>Páginas:</strong> { volumeInfo.pageCount }</PageCount>

                {
                    volumeInfo.industryIdentifiers &&
                    volumeInfo.industryIdentifiers.map(item => (
                        <IndustryIdentifiers>
                            <strong>{ item.type }: </strong> 
                            { item.identifier }
                        </IndustryIdentifiers>
                    ))
                }

                <Description>
                    { 
                        volumeInfo.description ? 
                        volumeInfo.description.length > 334 ? 
                        volumeInfo.description.slice(0, 335)+'...' : 
                        volumeInfo.description : 
                        'Sem descrição'
                    }
                </Description>

            </CardsRight>
        </Cards>
    )
} 