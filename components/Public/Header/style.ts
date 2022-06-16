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
        gap: 1.5rem;
    }

    nav ul li a {
        display: block;
        padding: 10px 25px;

        color: white;
        background-color: ${main};

        border-radius: 25px;
        cursor: pointer;

        transition: ${transition};

        &:hover {
            opacity: .9;
        }
    }
`