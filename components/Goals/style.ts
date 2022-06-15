import styled from 'styled-components';

import { Theme } from '../../theme';

const {
    main,
    white
} = Theme.light;

export const Choose = styled.div `  
    button {
        padding: 8px 15px;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;

        border-radius: 3px 3px 0 0;
    }

    button.active {
        background: ${main};
        color: ${white};
    }
`