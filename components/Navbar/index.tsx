import Link from 'next/link';

import { useRouter } from 'next/router';
import Image from 'next/image';

import Logo from '../../assets/LogoMyLivros.png';

import { Title } from "../../styles/style";
import { LinkA } from "../../styles/style";

import { 
    ContainerNav, 
    Nav ,
    ImageLogo
} from './style';

export function Navbar() {

    const { pathname } = useRouter();

    return (
        <ContainerNav>
            <ImageLogo>
                <Image src={Logo} alt="Logo MyLivros" width='150px' height='60px' />
            </ImageLogo>

            <Nav>
                <ul>
                    <li>
                        <Link href="/my-books">
                            <LinkA className={pathname == '/my-books' ? 'active' : ''}>
                                My livros
                            </LinkA>
                        </Link>
                    </li>
                    <li>
                        <Link href="/explorer">
                            <LinkA className={pathname == '/explorer' ? 'active' : ''}>
                                Explorar
                            </LinkA>
                        </Link>
                    </li>
                    <li>
                        <Link href="/goals">
                            <LinkA className={pathname == '/goals' ? 'active' : ''}>
                                Metas
                            </LinkA>
                        </Link>
                    </li>
                    
                </ul>
            </Nav>
        </ContainerNav>
    )
}