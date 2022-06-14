import { 
    ContainerModalAddSection,
    FormModalAddSection
} from "./style";

import { TitleSection } from "../style";

export function MyBooksModalAddSections() {
    return (
        <ContainerModalAddSection>
            <TitleSection>Adicionar uma nova seção</TitleSection>

            <FormModalAddSection>
                <input type="text" placeholder="Digite o nome da seção" />
            </FormModalAddSection>
        </ContainerModalAddSection>
    )
}