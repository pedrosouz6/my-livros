import styled from 'styled-components';

import { Theme } from '../../theme';

const {
    beige
} = Theme.light;

export const ContainerUser = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    

    background-color: ${beige};

    border-radius: 3px;
    padding: 10px;
`