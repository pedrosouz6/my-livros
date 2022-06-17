import Image from 'next/image';

import { 
    Container,
    ContainerLogin,
    FormLogin
} from './style';

import LogoMyLivros from '../../../assets/LogoMyLivros.png';

export function PublicLogin() {
    return (
        <Container>
            <ContainerLogin>
                <Image src={LogoMyLivros} width='150px' height='60px' />

                <h3>Login</h3>

                <FormLogin>
                    <input type='email' placeholder='Digite seu email' />
                    <input type='password' placeholder='Digite sua senha' />
                    <input id='sendFormLogin' type='submit' value='Enviar' />
                </FormLogin>

            </ContainerLogin>
        </Container>
    )
}