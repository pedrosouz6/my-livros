import Image from 'next/image';
import { useRouter } from 'next/router';

import { 
    Container,
    ContainerInputs,
    ContainerLogin,
    FormLogin,
    HeaderLogin,
    MessageEmpty
} from './style';

import { instance } from '../../../config/axios';

import LogoMyLivros from '../../../assets/LogoMyLivros.png';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { AxiosResponse } from 'axios';
import { IndicateError } from '../IndicateError';

interface RespostType {
    error: boolean,
    message: string
}

export function PublicLogin() {

    const router = useRouter();

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const [ isInputEmpty, setIsInputEmpty ] = useState<boolean | null>(null);
    const [ isEmailCorrect, setIsEmailCorrect ] = useState<boolean | null>(null);
    const [ isPasswordCorrect, setIsPasswordCorrect ] = useState<boolean | null>(null);

    function Login(e: FormEvent) {
        e.preventDefault();

        const validateEmail = /\S+@\S+\.\S+/;

        if(email?.trim() === '' || password?.trim() === '') {
            return setIsInputEmpty(true);
        }

        setIsInputEmpty(false);

        if(!validateEmail.test(email!)) {
           return setIsEmailCorrect(false);
        } 

        setIsEmailCorrect(true);
        
        if(!(password.length > 5)) {
            return setIsPasswordCorrect(false);
        }

        setIsPasswordCorrect(true);

        return instance.post('/login', {
            email,
            password
        })
        .then((response: AxiosResponse) => response.data)
        .then((respost: RespostType) => {
            if(respost.error) {
                console.log('erro no bd')
            }

            if(!respost.error) {
                return router.push('/my-books');
            }
        })
    }

    return (
        <Container>
            <ContainerLogin>
                <Image src={LogoMyLivros} width='150px' height='60px' />

                <HeaderLogin>
                    <h3>Login</h3>
                    <span>Ou <Link href='/register'>fazer cadastro</Link></span>
                </HeaderLogin>

                <FormLogin onSubmit={e => Login(e)}>
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
                        <MessageEmpty>Preencha o(s) campo(s) acima</MessageEmpty>
                    }

                    <input id='sendFormLogin' type='submit' value='Entrar' />
                </FormLogin>

            </ContainerLogin>
        </Container>
    )
}