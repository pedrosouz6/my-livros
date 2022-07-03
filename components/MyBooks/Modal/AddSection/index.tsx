import { FormEvent, useState } from 'react';

import { 
    ContainerModalAddSection,
    FormModalAddSection,
    FormModalButtonAdd
} from "./style";

import { TitleSection } from "../style";
import { instance } from '../../../../config/axios';

export function MyBooksModalAddSections() {

    const [ nameSection, setNameSection ] = useState<string | null>(null);
 
    function addSection(e: FormEvent) {
        e.preventDefault();

        if(nameSection?.trim()) {
            return instance.post('/addSection', {
                nameSection
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