import Image from 'next/image';

import { 
    Container,
    ContainerLogin,
    FormLogin,
    HeaderLogin
} from './style';

import LogoMyLivros from '../../../assets/LogoMyLivros.png';
import Link from 'next/link';

export function PublicLogin() {
    return (
        <Container>
            <ContainerLogin>
                <Image src={LogoMyLivros} width='150px' height='60px' />

                <HeaderLogin>
                    <h3>Login</h3>
                    <span>Ou <Link href='/register'>fazer cadastro</Link></span>
                </HeaderLogin>

                <FormLogin>
                    <input type='email' placeholder='Digite seu email' />
                    <input type='password' placeholder='Digite sua senha' />
                    <input id='sendFormLogin' type='submit' value='Entrar' />
                </FormLogin>

            </ContainerLogin>
        </Container>
    )
}