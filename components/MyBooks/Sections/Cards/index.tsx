import { 
    NameSection, 
    Cards, 
    LineDashed 
} from "./style";

interface MyBooksSectionsCardsProps {
    keyId: number,
    title: string
}

export function MyBooksSectionsCards({ title, keyId }: MyBooksSectionsCardsProps) {
    return (
        <Cards key={keyId}>
            <NameSection>{ title }</NameSection>
            <LineDashed>
                <span>Nenhum livro foi adicionado nessa seção.</span>
                <button>Adicionar</button>
            </LineDashed>
        </Cards>
    )
}