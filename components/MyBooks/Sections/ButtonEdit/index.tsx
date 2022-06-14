import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';

import { MyBooksModal } from '../../Modal';
import { Button } from "./style";

export function MyBooksSectionsButtonEdit() {

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
                <span>Editar seções <AiFillEdit /></span>
            </Button>
        </>
    )
}