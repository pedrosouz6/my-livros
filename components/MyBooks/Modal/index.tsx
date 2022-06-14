import { useState } from "react";

import { 
    ChooseModal, 
    ContentModal,
    ContainerModal,
    HeaderModal, 
    Modal 
} from "./style";

import { IoMdClose } from 'react-icons/io';

import { MyBooksModalAddSections } from './AddSection';
import { MyBoooksModalAllSections } from './AllSection';


interface MyBooksModalProps {
    setIsMyBooksModal: (isMyBooksModal : boolean) => void;
}

export function MyBooksModal({ setIsMyBooksModal } : MyBooksModalProps ) {

    const [ isMyBooksModalAddSession, setIsMyBooksModalAddSection ] = useState<boolean>(true);

    function CloseMyBooksModal() {
        setIsMyBooksModal(false);
    }

    return (
        <ContainerModal>
            <Modal>
                <HeaderModal>
                    <h3>Seções</h3>
                    <button onClick={() => CloseMyBooksModal()}><IoMdClose /></button>
                </HeaderModal>

                <ContentModal>
                    <ChooseModal>
                        <button 
                        className={isMyBooksModalAddSession ? 'active' : ''}
                        onClick={() => setIsMyBooksModalAddSection(true)}>
                            Adicionar seção
                        </button>

                        <button 
                        className={!isMyBooksModalAddSession ? 'active' : ''}
                        onClick={() => setIsMyBooksModalAddSection(false)}>
                            Todas seções
                        </button>
                    </ChooseModal>

                    {
                        isMyBooksModalAddSession ? 
                        <MyBooksModalAddSections /> :
                        <MyBoooksModalAllSections />
                    }
                </ContentModal>
                
            </Modal>
        </ContainerModal>
    )
}