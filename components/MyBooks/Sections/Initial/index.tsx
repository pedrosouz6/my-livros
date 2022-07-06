import { FormEvent, useState } from 'react';
import { setCookie } from 'nookies';

import { 
    ContainerInitial,
    ContainerRadioButton,
    RadioButton,
    ContainerButtonSubmit
} from './style';

export function MyBooksSectionsInitial() {

    const [ typeRadioButton, setTypeRadioButton ] = useState<string | null>(null);

    const [ errorRadio, setErrorRadio ] = useState<boolean>(false);
    const [ errorMessage, setErrorMessage ] = useState<string | null>(null);

    function initializeSection(e: FormEvent) {
        e.preventDefault();

        if(!typeRadioButton) {
            setErrorRadio(true);
            return setErrorMessage('Escolha uma das opções acima para iniciar');
        }

        // typeRadioButton === 'no-section' 

        if(typeRadioButton === 'pre-defined') {
            setErrorRadio(false);
            
            console.log('pre-defined');
        }

        if(typeRadioButton === 'no-section') {
            setCookie(null, 'no-section', true, {
                maxAge: 90 * 90 * 90
            })
        }
    }

    return (
        <ContainerInitial>
            <h1>As seções são onde você vai organizar seus livros</h1>

            <form onSubmit={e => initializeSection(e)}>
                <ContainerRadioButton>

                    <RadioButton 
                        type='radio' 
                        id='pre-defined' 
                        name='initialSection'
                        value='pre-defined' 
                        onChange={e => setTypeRadioButton(e.target.value)}
                    />
                    <label htmlFor='pre-defined'>Iniciar com seções pré-definidas.</label>

                </ContainerRadioButton>

                <ContainerRadioButton>

                    <RadioButton 
                        type='radio' 
                        id='no-section' 
                        name='initialSection' 
                        value='no-section' 
                        onChange={e => setTypeRadioButton(e.target.value)}
                    />
                    <label htmlFor='no-section'>Iniciar sem nenhuma seção.</label>

                </ContainerRadioButton>

                {
                    errorRadio && <span>{ errorMessage }</span>
                }

                <ContainerButtonSubmit>
                    <input type='submit' value='Iniciar' />
                </ContainerButtonSubmit>
            </form>
        </ContainerInitial>
    )
}