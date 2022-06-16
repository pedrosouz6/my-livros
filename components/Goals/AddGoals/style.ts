import styled from 'styled-components';

import { Theme } from '../../../theme';

const {
    beige
} = Theme.light;

export const ContainerAddGoals = styled.div `

`

export const NameInputGoal = styled.input `
    margin-top: 2rem;
    width: 100%;
    height: 40px;

    padding: 0 10px;
    border-radius: 3px;
    border: 1px solid ${beige};
    outline: none;

    &:focus,
    &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    }
`

export const DatesForm = styled.div `
    margin: 2rem 0;
    display: flex;
    gap: 3rem;
`

export const Date = styled.div `
    display: flex;
    gap: 1rem;
    align-items: center;

    input {
        height: 35px;
        padding: 0 5px;
    }
`

export const ChooseGoals = styled.div `
    
`