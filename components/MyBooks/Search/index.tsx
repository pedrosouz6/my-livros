import { User } from "../../User"
import { Search, ContainerSearch } from "./style"
import { Input } from '../../../components/Input';

export function MyBooksSearch() {
    return (
        <ContainerSearch>
            <Input placeholder="Pesquisar meus livros" />
            <User />
        </ContainerSearch>
    )   
}