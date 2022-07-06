import styled from 'styled-components';

import { Theme } from '../../../../theme';

const {
    beige,
    main,
    transition,
    white
} = Theme.light;

export const ContainerInitial = styled.div `
    max-width: 500px;
    margin: 0 auto;
    
    h1 {
        text-align: center;
        margin: 3rem 0;
    }

    span {
        font-size: 11pt;
        text-align: center;
        display: block;
        margin: 1rem 0 1rem 0;
    }
`

export const RadioButton = styled.input `
    appearance: none;

    width: 20px;
    height: 20px;
    border-radius: 50%;

    cursor: pointer;

    background: ${beige};

    transition: ${transition};

    &:checked {
        background: ${main};
    }
`

export const ContainerRadioButton = styled.div `
    display: flex;
    gap: .5rem;
    align-items: center;

    margin-bottom: 1rem;

    label {
        cursor: pointer;
    }
`

export const ContainerButtonSubmit = styled.div `
    display: flex;
    justify-content: end;

    input {
        width: 100px;
        height: 35px;
        border: none;

        cursor: pointer;

        background-color: ${main};
        color: ${white};
        border-radius: 3px;

        transition: ${transition};

        &:hover {
            opacity: .8;
        }
    }
`