import { 
    ChooseModal, 
    ContentModal,
    ContainerModal,
    HeaderModal, 
    Modal 
} from "./style";

import { IoMdClose } from 'react-icons/io';

interface MyBooksModalProps {
    setIsMyBooksModal: (isMyBooksModal : boolean) => void;
}

export function MyBooksModal({ setIsMyBooksModal } : MyBooksModalProps ) {

    function CloseMyBooksModal() {
        setIsMyBooksModal(false);
    }

    return (
        <ContainerModal>
            <Modal>
                <HeaderModal>
                    <h3>Sessões</h3>
                    <button onClick={() => CloseMyBooksModal()}><IoMdClose /></button>
                </HeaderModal>

                <ContentModal>
                    <ChooseModal>
                        <button>Adicionar sessão</button>
                        <button>Todas sessão</button>
                    </ChooseModal>
                </ContentModal>
                
            </Modal>
        </ContainerModal>
    )
}