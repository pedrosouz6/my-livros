import { User } from "../../User"
import { Search, ContainerSearch } from "./style"

export function MyBooksSearch() {
    return (
        <ContainerSearch>
            <Search placeholder="Pesquisar meus livros" />
            <User />
        </ContainerSearch>
    )   
}