import styled from 'styled-components';

import { Theme } from '../../../../theme';

const {
    main,
    white
} = Theme.light;

export const Button = styled.button `
    width: 150px;
    background-color: ${main};
    border: none;
    border-radius: 3px;
    padding: 0 3px;
    cursor: pointer;
    color: ${white};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`