import { destroyCookie } from "nookies";

import { ContainerNoSection } from "./style";

export function MyBooksSectionsNoSection() {

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