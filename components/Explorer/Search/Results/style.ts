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
`

export const TitleBook = styled.h4 `
    font-size: 17pt;
`

export const Authors = styled.div `
    display: flex;
    gap: 1rem;
`

export const AuthorName = styled.span `
    display: inline-block;
    margin: .5rem 0 1rem 0;
    color: #777;
` 

export const PublishedDate = styled.span `
    display: inline-block;
    margin-right: 1rem;
`

export const Publisher = styled.span `
    display: inline-block;
`

export const PageCount = styled.span `
    display: block;
    margin-top: .2rem;
` 

export const IndustryIdentifiers = styled.span `
    display: inline-block;
    margin: 1rem 1rem 0 0;
`

export const Description = styled.p `
    margin-top: 1rem;
`