import { User } from "../../User"
import { Search, Container } from "./style"

export function MyBooksSearch() {
    return (
        <Container>
            <Search placeholder="Pesquisar meus livros" />
            <User />
        </Container>
    )   
}