import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

import { instance } from '../../../config/axios';

import { IndicateError } from './IndicateError';

import { 
    Container,
    ContainerRegister,
    FormRegister,
    HeaderRegister,
    MessageErrorEmail,
    ContainerInputs
} from './style';

import LogoMyLivros from '../../../assets/LogoMyLivros.png';

export function PublicRegister() {


    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const [ isInputEmpty, setIsInputEmpty ] = useState<boolean | null>(null);
    const [ isEmailCorrect, setIsEmailCorrect ] = useState<boolean | null>(null);

    function CreateAccount(e: FormEvent) {
        e.preventDefault();

        const validateEmail = /\S+@\S+\.\S+/;

        
        if(name?.trim() === '' || email?.trim() === '' || password?.trim() === '') {
            return setIsInputEmpty(true);
            // instance.post('/register', {
            //     name,
            //     email,
            //     password
            // })
            // .then(response => response.data)
            // .then(respost => console.log(respost))
        }

        if(!validateEmail.test(email!)) {
            setIsEmailCorrect(false);
        } else {
            setIsEmailCorrect(true);
        }
    }

    console.log(isEmailCorrect)

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
                    <ContainerInputs>
                        <input 
                        type='text' 
                        placeholder='Digite seu nome' 
                        value={name!}
                        onChange={e => setName(e.target.value)} />
                    </ContainerInputs>

                    <ContainerInputs>
                        <input 
                        type='text' 
                        placeholder='Digite seu email'
                        value={email!}
                        onChange={e => setEmail(e.target.value)} />

                        { 
                            isEmailCorrect === false && 
                            <IndicateError />
                        }
                    </ContainerInputs>
                    
                    <ContainerInputs>
                        <input
                        type='password'
                        placeholder='Digite sua senha'
                        value={password!}
                        onChange={e => setPassword(e.target.value)} />

                        {
                            isInputEmpty === true &&
                            <MessageErrorEmail>Preencha o(s) campo(s) acima</MessageErrorEmail>
                        }

                    </ContainerInputs>

                    <input id='sendFormRegister' type='submit' value='Criar conta' />
                </FormRegister>

            </ContainerRegister>
        </Container>
    )
}