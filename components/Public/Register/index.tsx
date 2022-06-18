import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

import { 
    Container,
    ContainerRegister,
    FormRegister,
    HeaderRegister
} from './style';

import LogoMyLivros from '../../../assets/LogoMyLivros.png';

export function PublicRegister() {

    const [ email, setEmail ] = useState<string | null>(null);

    function CreateAccount(e: FormEvent) {
        e.preventDefault();

        console.log(email);
        const validateEmail = /\S+@\S+\.\S+/;

        const vEmail = validateEmail.test(email!);

        console.log(vEmail);
    }

    return (
        <Container>
            <ContainerRegister>
                <Image src={LogoMyLivros} width='150px' height='60px' />

                <HeaderRegister>
                    <h3>Criar conta</h3>
                    <span>Ou <Link href='/login'>entrar em uma conta já existente</Link></span>
                </HeaderRegister>

                <FormRegister
                onSubmit={e => CreateAccount(e)}
                >
                    <input type='text' placeholder='Digite seu nome' />

                    <input 
                    type='text' 
                    placeholder='Digite seu email'
                    value={email!}
                    onChange={e => setEmail(e.target.value)} />
                    
                    <input type='password' placeholder='Digite sua senha' />
                    
                    <input id='sendFormRegister' type='submit' value='Criar conta' />
                </FormRegister>

            </ContainerRegister>
        </Container>
    )
}