import { 
    NameSection, 
    Cards, 
    LineDashed 
} from "./style";

interface MyBooksSectionsCardsProps {
    datas: {
        name_section: string
    },
    keyId: number
}

export function MyBooksSectionsCards({ datas, keyId }: MyBooksSectionsCardsProps) {
    return (
        <Cards key={keyId}>
            <NameSection>{ datas.name_section }</NameSection>
            <LineDashed>
                <span>Nenhum livro foi adicionado nessa seção.</span>
                <button>Adicionar</button>
            </LineDashed>
        </Cards>
    )
}