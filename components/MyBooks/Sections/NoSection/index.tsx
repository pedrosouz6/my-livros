import { destroyCookie } from "nookies";

import { ContainerNoSection } from "./style";

type MyBooksSectionsNoSectionProps = {
    handleLoopNoSection: () => void
}

export function MyBooksSectionsNoSection({ handleLoopNoSection }: MyBooksSectionsNoSectionProps) {

    // function backChooseSections() {
    //     destroyCookie(null, 'no-section');
    //     handleLoopNoSection();
    // }

    // funcionalidade de deixar o usuario escolher novamente

    return (
        <ContainerNoSection>
            <h1>Você ainda não adicionou nenhuma seção</h1>
        </ContainerNoSection>
    )
}