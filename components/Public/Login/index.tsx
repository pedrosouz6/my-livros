import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AxiosResponse } from 'axios';
import { useState, FormEvent } from 'react';

import { instance } from '../../../config/axios';

import LogoMyLivros from '../../../assets/LogoMyLivros.png';
import { IndicateError } from '../IndicateError';
import { Loading } from '../../Loading';

import { setCookie } from 'nookies';

import { 
    Container,
    ContainerInputs,
    ContainerLogin,
    FormLogin,
    HeaderLogin,
    MessageError
} from './style';


interface RespostType {
    error: boolean,
    message: string,
    token: string
}

export function PublicLogin() {

    const router = useRouter();

    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const [ isErrorExist, setIsErrorExist ] = useState<boolean>(false);
    const [ messageError, setMessageError ] = useState<string | null>(null);

    const [ isEmailCorrect, setIsEmailCorrect ] = useState<boolean | null>(null);
    const [ isPasswordCorrect, setIsPasswordCorrect ] = useState<boolean | null>(null);

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    function Login(e: FormEvent) {
        e.preventDefault();

        setIsLoading(true);

        const validateEmail = /\S+@\S+\.\S+/;

        if(email?.trim() === '' || password?.trim() === '') {
            setIsLoading(false);
            setIsErrorExist(true);
            return setMessageError('Preencha o(s) campo(s) acima')
        }

        setIsErrorExist(false);

        if(!validateEmail.test(email!)) {
            setIsLoading(false);
            return setIsEmailCorrect(false);
        } 

        setIsEmailCorrect(true);
        
        if(!(password.length > 5)) {
            setIsLoading(false);
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
                setIsErrorExist(true);
                setMessageError(respost.message);
                setIsLoading(false);
            }

            if(!respost.error) {
                setCookie(null, 'token_user', respost.token, {
                    maxAge: 100 * 100 * 100
                })
                router.push('/my-books');
                setIsLoading(false);
            }

            setIsLoading(false)
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
                        isErrorExist === true &&
                        <MessageError>{ messageError }</MessageError>
                    }

                    <button id='sendFormLogin' type='submit'>
                        { isLoading ? <Loading /> : 'Entrar' }
                    </button>
                </FormLogin>

            </ContainerLogin>
        </Container>
    )
}