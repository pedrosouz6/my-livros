import styled from 'styled-components';

import { Theme } from '../../../theme';

const {
    transition,
    main,
    white
} = Theme.light;

export const ContainerModalAddSection = styled.div `
    
`

export const FormModalAddSection = styled.form `
    margin-top: 1rem;

    input {
        width: 100%;
        height: 40px;
        padding: 0 10px;

        border-radius: 3px;

        border: none;
        outline: none;
        outline: none;

        transition: ${transition};

        &:focus,
        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, .2);
        }
    }
`

export const FormModalButtonAdd = styled.button `
    margin-top: 1rem;
    width: 100px;
    height: 35px;

    border: none;
    outline: none;
    border-radius: 3px;

    cursor: pointer;

    background-color: ${main};
    color: ${white};
`