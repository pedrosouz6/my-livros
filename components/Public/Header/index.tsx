import Image from "next/image";
import Link from "next/link";
import ImageLogo from '../../../assets/LogoMyLivros.png';
import { LinkA } from "../../../styles/style";

import { ContainerCenter } from "../../../styles/style";
import { ContainerHeader, Header } from "./style";

export function PublicHeader() {
    return (
        <Header>
            <ContainerCenter>
                <ContainerHeader>
                    <div>
                        <Image src={ImageLogo} alt='Logo MyLivros' />
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <Link href='/login'>
                                    <LinkA>Login</LinkA>
                                </Link>
                            </li>
                            <li>
                                <Link href='/register'>
                                    <LinkA>Registrar</LinkA>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </ContainerHeader>
            </ContainerCenter>
        </Header>
    )
}