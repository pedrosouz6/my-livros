import { MyBooksSessionsButtonEdit } from '../ButtonEdit';

import { Container, Select } from "./style";

export function MyBooksSessionsFilter() {
    return (
        <Container>
            <Select>
                <option value="lidos">Lidos</option>
            </Select>
            <MyBooksSessionsButtonEdit />
        </Container>
    )
}