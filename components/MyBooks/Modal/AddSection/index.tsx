import { FormEvent, useState } from 'react';
import { destroyCookie } from 'nookies';

import { TitleSection } from "../style";
import { instance } from '../../../../config/axios';
import { useSections } from '../../../../hooks/Sections';

import { 
    ContainerModalAddSection,
    FormModalAddSection,
    FormModalButtonAdd
} from "./style";

interface RespostTypes {
    error: true,
    message: string
}

export function MyBooksModalAddSections() {

    const { handleLoopNoSection } = useSections();

    const [ nameSection, setNameSection ] = useState<string | null>(null);
 
    function addSection(e: FormEvent) {
        e.preventDefault();

        if(nameSection?.trim()) {
            return instance.post('/addSection', {
                nameSection
            })
            .then(response => response.data)
            .then((respost: RespostTypes) => {
                if(respost.error) {
                    return console.log(respost.message);
                }

                destroyCookie(null, 'no-section');
                handleLoopNoSection();
                return console.log(respost.message);
            })
        }

        return console.log('vazio add section')
        
    }

    return (
        <ContainerModalAddSection>
            <TitleSection>Adicionar uma nova seção</TitleSection>

            <FormModalAddSection
            onSubmit={e => addSection(e)}>

                <input 
                type="text" 
                placeholder="Digite o nome da seção"
                value={nameSection!}
                onChange={e => setNameSection(e.target.value)} />

                <FormModalButtonAdd 
                type="submit">
                    Adicionar
                </FormModalButtonAdd>
            </FormModalAddSection>
        </ContainerModalAddSection>
    )
}