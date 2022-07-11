import { FormEvent, useState } from 'react';
import { destroyCookie } from 'nookies';

import { instance } from '../../../config/axios';
import { useSections } from '../../../hooks/Sections';

import { 
    FormModalButtonAdd
} from "./style";

import { Container } from '../../../styles/style';
import { Input } from '../../Input';

import { Title } from '../../Title';

interface RespostTypes {
    error: true,
    message: string
}

export function MyBooksAddSections() {

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
        <Container>
            <Title text='Adicionar uma nova seção' />

            <form
            onSubmit={e => addSection(e)}>

                <Input 
                type="text" 
                placeholder="Digite o nome da seção"
                value={nameSection!}
                onChange={e => setNameSection(e.target.value)} />

                <FormModalButtonAdd 
                type="submit">
                    Adicionar
                </FormModalButtonAdd>
            </form>
        </Container>
    )
}