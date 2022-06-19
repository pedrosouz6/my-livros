import styled from "styled-components";

import { Theme } from "../../../theme";

const {
    main,
    transition,
    white
} = Theme.light;

export const Header = styled.header `
    width: 100%;
    background-color: ${white};
`

export const ContainerHeader = styled.div `
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav ul {
        list-style: none;

        display: flex;
        gap: 1rem;
    }
`

export const ButtonLogin = styled.button `
    background: none;
    border: none;
    outline: none;

    a {
        color: ${main};
        font-weight: 500;
        display: block;
        padding: 6px 18px;

        border-radius: 25px;
        cursor: pointer;
        border: 2px solid ${main};
        text-decoration: none;


        transition: ${transition};

        &:hover {
            opacity: .9;
        }
    }
`

export const ButtonRegister = styled.button `
    background: none;
    border: none;
    outline: none;

    a {
        border: 2px solid ${main};
        background-color: ${main};
        color: white;
        font-weight: 500;
        display: block;

        padding: 6px 18px;

        border-radius: 25px;
        cursor: pointer;
        text-decoration: none;


        transition: ${transition};

        &:hover {
            opacity: .9;
        }
    }
`

