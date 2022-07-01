import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Logo from '../../assets/LogoMyLivros.png';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { LinkA } from "../../styles/style";

import { 
    ContainerNav, 
    Nav,
    ImageLogo,
    ButtonResponsive
} from './style';

import { ButtonSignOut } from '../ButtonSignOut';

export function Navbar() {

    const { pathname } = useRouter();

    const [ isMenuResponsive, setIsMenuResponsive ] = useState<boolean>(false);

    return (
        <ContainerNav>
            <ImageLogo>
                <Image src={Logo} alt="Logo MyLivros" width='150px' height='60px' />
            </ImageLogo>

            <Nav isMenuResponsive={!isMenuResponsive ? '-270px' : '0px'}>
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

                    <ButtonSignOut text='Sair da conta' />
                </ul>
            </Nav>
            <ButtonResponsive 
            onClick={() => setIsMenuResponsive(!isMenuResponsive)}>
                {
                    !isMenuResponsive ? 
                    <AiOutlineMenu /> :
                    <AiOutlineClose />
                }
            </ButtonResponsive>

        </ContainerNav>
    )
}