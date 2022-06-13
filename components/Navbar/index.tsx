import Link from 'next/link';

import { useRouter } from 'next/router';

import { Title } from "../../styles/style";
import { LinkA } from "../../styles/style";

import { Container, Nav } from './style';

export function Navbar() {

    const { pathname } = useRouter();

    return (
        <Container>
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
                                meus livros
                            </LinkA>
                        </Link>
                    </li>
                    <li>
                        <Link href="/m">
                            <LinkA>
                                meus livros
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
        </Container>
    )
}