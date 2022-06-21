import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

import { instance } from '../../../config/axios';

import { 
    Container,
    ContainerRegister,
    FormRegister,
    HeaderRegister
} from './style';

import LogoMyLivros from '../../../assets/LogoMyLivros.png';

export function PublicRegister() {


    const [ name, setName ] = useState<string | null>(null);
    const [ email, setEmail ] = useState<string | null>(null);
    const [ password, setPassword ] = useState<string | null>(null);

    function CreateAccount(e: FormEvent) {
        e.preventDefault();

        console.log(email);
        const validateEmail = /\S+@\S+\.\S+/;

        if(validateEmail.test(email!)) {
            instance.post('/register', {
                
                name,
                email,
                password
            })
            .then(response => response.data)
            .then(respost => console.log(respost))
        }
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
                    <input 
                    type='text' 
                    placeholder='Digite seu nome' 
                    value={name!}
                    onChange={e => setName(e.target.value)} />

                    <input 
                    type='text' 
                    placeholder='Digite seu email'
                    value={email!}
                    onChange={e => setEmail(e.target.value)} />
                    
                    <input
                    type='password'
                    placeholder='Digite sua senha'
                    value={password!}
                    onChange={e => setPassword(e.target.value)} />
                    
                    <input id='sendFormRegister' type='submit' value='Criar conta' />
                </FormRegister>

            </ContainerRegister>
        </Container>
    )
}