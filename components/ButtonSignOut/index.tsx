import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';

import { Button } from "./style";

import { BsBoxArrowInLeft } from 'react-icons/bs';

interface ButtonSignOutProps {
    text: string
}

export function ButtonSignOut({ text }: ButtonSignOutProps) {

    const router = useRouter();
    
    function signIn(){
        destroyCookie(null, 'token_user');
        destroyCookie(null, 'name_user');
        router.push('/');
    }
     
    return (
        <Button
            onClick={() => signIn()}
        >
            <i><BsBoxArrowInLeft /></i>
            { text }
        </Button>
    )
}