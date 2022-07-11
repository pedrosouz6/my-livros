import styled from 'styled-components';

import { Theme } from '../../../theme';

const {
    transition,
    main,
    white
} = Theme.light;

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