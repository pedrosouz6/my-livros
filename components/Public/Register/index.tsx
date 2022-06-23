import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

import { AxiosResponse } from 'axios';

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

interface RespostType {
    error: boolean,
    message: string
}

interface Respos {
    data: RespostType
}

export function PublicRegister() {

    const router = useRouter();

    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const [ isInputEmpty, setIsInputEmpty ] = useState<boolean | null>(null);
    const [ isEmailCorrect, setIsEmailCorrect ] = useState<boolean | null>(null);
    const [ isPasswordCorrect, setIsPasswordCorrect ] = useState<boolean | null>(null);

    const [ teste, setTeste ] = useState<boolean | null>(null);

    function CreateAccount(e: FormEvent) {
        e.preventDefault();

        const validateEmail = /\S+@\S+\.\S+/;

        if(name?.trim() === '' || email?.trim() === '' || password?.trim() === '') {
            return setIsInputEmpty(true);
        }

        setIsInputEmpty(false);

        if(!validateEmail.test(email!)) {
           return setIsEmailCorrect(false);
        } 

        setIsEmailCorrect(true);
        
        if(!(password.length >= 5)) {
            return setIsPasswordCorrect(false);
        }

        setIsPasswordCorrect(true);

        return instance.post('/register', {
            name,
            email,
            password
        })
        .then((response: AxiosResponse) => response.data)
        .then((respost: RespostType) => {
            if(respost.error) {
                console.log('erro no bd')
                setTeste(true);
            }

            return router.push('/my-books');
        })
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
                            <IndicateError text='O e-mail está incorreto' />
                        }
                    </ContainerInputs>
                    
                    <ContainerInputs>
                        <input
                        type='password'
                        placeholder='Digite sua senha'
                        value={password!}
                        onChange={e => setPassword(e.target.value)} />

                        {       
                            isPasswordCorrect === false && 
                            <IndicateError text='A senha deve ser maior que 5 caracteres' />
                        }

                    </ContainerInputs>

                        {
                            isInputEmpty === true &&
                            <MessageErrorEmail>Preencha o(s) campo(s) acima</MessageErrorEmail>
                        }

{
                            teste === true &&
                            <MessageErrorEmail>banco de dados</MessageErrorEmail>
                        }

                    <input id='sendFormRegister' type='submit' value='Criar conta' />
                </FormRegister>

            </ContainerRegister>
        </Container>
    )
}