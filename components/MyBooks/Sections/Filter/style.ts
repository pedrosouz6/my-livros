import styled from 'styled-components';

import { Theme } from '../../../../theme';

const {
    beige,
    main,
    white
} = Theme.light;

export const Container = styled.div `
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
`

export const Select = styled.select `
    width: 100%;
    height: 42px;
    background-color: ${beige};
    border: none;
    outline: none;

    padding: 0 10px;
    border-radius: 3px;

    font-size: .9rem;
`