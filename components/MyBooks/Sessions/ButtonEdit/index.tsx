import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';

import { MyBooksModal } from '../../Modal';
import { Button } from "./style";

export function MyBooksSessionsButtonEdit() {

    const [ isMyBooksModal, setIsMyBooksModal ] = useState<boolean>(false);

    function OpenMyBooksModal() {
        setIsMyBooksModal(true);
    }


    return (
        <>
            { 
                isMyBooksModal && 
                <MyBooksModal 
                setIsMyBooksModal={setIsMyBooksModal} /> 
            }

            <Button onClick={() => OpenMyBooksModal()}>
                <span>Editar sessões <AiFillEdit /></span>
            </Button>
        </>
    )
}