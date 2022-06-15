import { Container } from "../../styles/style";

import { Choose } from "./style";

export function Goals() {
    return (
        <Container>
            <Choose>
                <button>Adicionar metas</button>
                <button>Ver minhas metas</button>
            </Choose>
        </Container>        
    )
}