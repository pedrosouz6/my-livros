import { MyBooksSectionsButtonEdit } from '../ButtonEdit';

import { Container, Select } from "./style";

export function MyBooksSectionsFilter() {
    return (
        <Container>
            <Select>
                <option value="lidos">Lidos</option>
            </Select>
            <MyBooksSectionsButtonEdit />
        </Container>
    )
}