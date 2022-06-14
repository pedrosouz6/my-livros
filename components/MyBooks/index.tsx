import { MyBooksSearch } from './Search';
import { MyBooksSectionsFilter } from "./Sections/Filter";

import { 
    NameSection, 
    CardsSections, 
    Cards, 
    LineDashed 
} from "./style";

import { Container } from '../../styles/style';

export function MyBook() {
    return (
        <Container>
            <MyBooksSearch />
            <MyBooksSectionsFilter />

            <CardsSections>
                <Cards>
                    <NameSection>Lidos</NameSection>
                    <LineDashed>
                        <span>Nenhum livro foi adicionado nessa seção.</span>
                        <button>Adicionar</button>
                    </LineDashed>
                </Cards>

                <Cards>
                    <NameSection>Lendo</NameSection>
                    <LineDashed>
                        <span>Nenhum livro foi adicionado nessa seção.</span>
                        <button>Adicionar</button>
                    </LineDashed>
                </Cards>

                <Cards>
                    <NameSection>Parei</NameSection>
                    <LineDashed>
                        <span>Nenhum livro foi adicionado nessa seção.</span>
                        <button>Adicionar</button>
                    </LineDashed>
                </Cards>
            </CardsSections>            
        </Container>
    )
}