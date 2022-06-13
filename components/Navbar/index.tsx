import Link from 'next/link';

import { useRouter } from 'next/router';

import { Title } from "../../styles/style";
import { LinkA } from "../../styles/style";

import { ContainerNav, Nav } from './style';

export function Navbar() {

    const { pathname } = useRouter();

    return (
        <ContainerNav>
            <div className="navbar-logo">
                <Title>
                    Logo
                </Title>
            </div>

            <Nav>
                <ul>
                    <li>
                        <Link href="/">
                            <LinkA className={pathname == '/' ? 'active' : ''}>
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
                        <Link href="/b">
                            <LinkA>
                                meus livros
                            </LinkA>
                        </Link>
                    </li>
                    
                </ul>
            </Nav>
        </ContainerNav>
    )
}