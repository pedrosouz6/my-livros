import styled from "styled-components";

import { Theme } from "../../../theme";

const {
    main
} = Theme.light;

export const TitleWellcome = styled.h1 `
    text-align: center;
    color: ${main};
    font-size: 3.3rem;
`

export const Container = styled.div `
    padding: 30px 0;
`

export const ContainerWellcome = styled.div `
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
`

export const LeftWellcome = styled.div `
    flex: 1 1 300px;

    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    button {
        border-radius: 25px;
        border: none;
        outline: none;
        background-color: ${main};
        cursor: pointer;

        a {
            display: block;
            padding: 10px 40px;
            color: white;
            text-decoration: none;
        }
    }

    p {
        text-align: center;
        font-size: 1.4rem;
    }

`

export const RightWellcome = styled.div `
    flex: 1 1 300px;

    display: flex;
    justify-content: center;
`