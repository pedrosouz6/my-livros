import styled from 'styled-components';

import { Theme } from '../../../Theme';

const {
    beige
} = Theme.light;


export const Container = styled.div `
    width: 100%;
    display: flex;
    gap: 1.5rem;
`

export const Search = styled.input `
    width: 100%;
    height: 42px;
    background-color: ${beige};
    border: none;
    outline: none;

    padding: 0 10px;
    border-radius: 3px;

    font-size: .9rem;
`