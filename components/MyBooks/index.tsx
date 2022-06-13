import { MyBooksSearch } from './Search';
import { MyBooksSessionsFilter } from "./Sessions/Filter";

import { 
    Container, 
    NameSession, 
    CardsSessions, 
    Cards, 
    LineDashed 
} from "./style";

export function MyBook() {
    return (
        <Container>
            <MyBooksSearch />
            <MyBooksSessionsFilter />

            <CardsSessions>
                <Cards>
                    <NameSession>Lidos</NameSession>
                    <LineDashed>
                        <span>Nenhum livro foi adicionado nessa sessão.</span>
                        <button>Adicionar</button>
                    </LineDashed>
                </Cards>

                <Cards>
                    <NameSession>Lendo</NameSession>
                    <LineDashed>
                        <span>Nenhum livro foi adicionado nessa sessão.</span>
                        <button>Adicionar</button>
                    </LineDashed>
                </Cards>

                <Cards>
                    <NameSession>Parei</NameSession>
                    <LineDashed>
                        <span>Nenhum livro foi adicionado nessa sessão.</span>
                        <button>Adicionar</button>
                    </LineDashed>
                </Cards>
            </CardsSessions>            
        </Container>
    )
}