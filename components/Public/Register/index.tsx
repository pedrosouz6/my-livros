import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import Image from 'next/image';

import { AxiosResponse } from 'axios';

import { instance } from '../../../config/axios';

import { IndicateError } from '../IndicateError';

import { 
    Container,
    ContainerRegister,
    FormRegister,
    HeaderRegister,
    MessageError,
    ContainerInputs
} from './style';

import { setCookie } from 'nookies';

import LogoMyLivros from '../../../assets/LogoMyLivros.png';
import { Loading } from '../../Loading';

interface RespostType {
    error: boolean,
    message: string,
    token: string
}

export function PublicRegister() {

    const router = useRouter();

    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const [ isEmailCorrect, setIsEmailCorrect ] = useState<boolean | null>(null);
    const [ isPasswordCorrect, setIsPasswordCorrect ] = useState<boolean | null>(null);

    const [ messageError, setMessageError ] = useState<string | null>(null);
    const [ isErrorExist, setIsErrorExist ] = useState<boolean>(false);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    function CreateAccount(e: FormEvent) {
        e.preventDefault();
        setIsLoading(true);

        const validateEmail = /\S+@\S+\.\S+/;

        if(name?.trim() === '' || email?.trim() === '' || password?.trim() === '') {
            setMessageError('Preencha o(s) campo(s) acima');
            setIsLoading(false);
            return setIsErrorExist(true);
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

        return instance.post('/register', {
            name,
            email,
            password
        })
        .then((response: AxiosResponse) => response.data)
        .then((respost: RespostType) => {
            if(respost.error) {
                setMessageError('Erro no banco de dados ao cadastrar');
                setIsErrorExist(true);
                setIsLoading(false);
            } else {
                setCookie(null, 'token_user', respost.token, {
                    maxAge: 100 * 100 * 100
                })
                setIsErrorExist(false);
                router.push('/my-books');
                setIsLoading(false);
            }
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
                            isErrorExist === true &&
                            <MessageError>{ messageError }</MessageError>
                        }

                    <button 
                    id='sendFormRegister' 
                    type='submit'>
                        { isLoading ? <Loading /> : 'Criar conta' }
                    </button>   
                </FormRegister>

            </ContainerRegister>
        </Container>
    )
}