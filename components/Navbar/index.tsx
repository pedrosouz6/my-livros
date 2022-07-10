import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Logo from '../../assets/LogoMyLivros.png';

import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsBookHalf } from 'react-icons/bs';
import { GiWorld } from 'react-icons/gi';
import { GiStairsGoal } from 'react-icons/gi';
import { BiBookAdd } from 'react-icons/bi';
import { FaSwatchbook } from 'react-icons/fa';

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
                                <i><BsBookHalf /></i>
                                My livros
                            </LinkA>
                        </Link>
                    </li>
                    <li>
                        <Link href="/explorer">
                            <LinkA className={pathname == '/explorer' ? 'active' : ''}>
                                <i><GiWorld /></i>
                                Explorar
                            </LinkA>
                        </Link>
                    </li>
                    <li>
                        <Link href="/goals">
                            <LinkA className={pathname == '/goals' ? 'active' : ''}>
                                <i><GiStairsGoal /></i>
                                Metas
                            </LinkA>
                        </Link>
                    </li>

                    <li>
                        <Link href="/add-section">
                            <LinkA className={pathname == '/add-section' ? 'active' : ''}>
                                <i><BiBookAdd /></i>
                                Adicionar seção
                            </LinkA>
                        </Link>
                    </li>

                    <li>
                        <Link href="/all-section">
                            <LinkA className={pathname == '/all-section' ? 'active' : ''}>
                                <i><FaSwatchbook /></i>
                                Ver todas as seções
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