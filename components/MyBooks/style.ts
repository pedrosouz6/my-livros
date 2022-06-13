import styled from "styled-components";

import { Theme } from "../../theme";

const {
    white,
    black,
    main
} = Theme.light;

export const Container = styled.div `
    position: absolute;
    top: 0;
    width: calc(100% - 200px);
    height: 110vh;
    left: 200px;
    padding: 20px 40px;
`

export const NameSession = styled.h4 `
    margin: 2rem 0 1rem 0;

`

export const CardsSessions = styled.div `
    display: flex;
    flex-direction: column;
`

export const Cards = styled.div `
`

export const LineDashed = styled.div `
    border: 1px dashed ${black};
    width: 100%;
    padding: 50px 20px;
    border-radius: 3px;

    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    span {
        text-align: center;
    }

    button {
        background-color: ${main};
        color: ${white};

        padding: 8px 15px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 3px;
    }
`
