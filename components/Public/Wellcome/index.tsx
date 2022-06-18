import Image from "next/image";
import ImageWellcome from '../../../assets/Wellcome.svg';

import { 
    Container, 
    ContainerWellcome,
    TitleWellcome, 
    LeftWellcome, 
    RightWellcome 
} from "./style";

import { ContainerCenter } from "../../../styles/style";
import Link from "next/link";

export function PublicWellcome() {
    return (
        <Container>
            <ContainerCenter>
                <ContainerWellcome>
                    <LeftWellcome>
                        <TitleWellcome>Organize seus livros</TitleWellcome>
                        <p>O MyLivros irá te ajudar a organizar seus livros online de forma fácil e gratuita!</p>
                        <button>
                            <Link href='/register'>Começar</Link>
                        </button>
                    </LeftWellcome>

                    <RightWellcome>
                        <Image src={ImageWellcome} alt='Imagem de boas vindas' width='400px' height='400px' />
                    </RightWellcome>
                </ContainerWellcome>
            </ContainerCenter>
        </Container>
    )
}