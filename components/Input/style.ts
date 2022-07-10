import styled from 'styled-components';

import { Theme } from '../../theme';

const {
    beige,
    transition
} = Theme.light;

export const Inputs = styled.input `
    width: 100%;
    height: 40px;

    padding: 0 10px;
    border-radius: 3px;
    border: 1px solid ${beige};
    outline: none;

    transition: ${transition};

    &:focus,
    &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    }
`