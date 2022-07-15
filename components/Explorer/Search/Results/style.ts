import styled from "styled-components";

import { Theme } from "../../../../theme";

const {
    main,
    white,
    transition
} = Theme.light;

export const Cards = styled.div `
    display: flex;
    gap: 1.5rem;
    padding: 2rem 1.5rem 1rem 1.5rem;
`

export const CardsLeft = styled.div `
    width: 120px;
    display: flex;
    gap: .5rem;
    flex-direction: column;

    img {
        width: 100%;
        height: 180px;
        box-shadow: 0 0 3px rgba(0, 0, 0, .2);
        border-radius: 3px;
    }

    button {
        width: 100%;
        height: 30px;
        
        background-color: ${main};
        color: ${white};
        
        border: none;
        border-radius: 3px;

        cursor: pointer;
        transition: ${transition};

        &:hover {
            opacity: .9;
        }
    }
`

export const CardsRight = styled.div `
    flex: 1;
    background-color: aqua;
`

export const AuthorName = styled.span `
    display: block;
` 