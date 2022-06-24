import styled from "styled-components";

import { Theme } from "../../../theme";

const {
    beige,
    main,
    transition
} = Theme.light;

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px;
`

export const ContainerLogin = styled.div `
    max-width: 410px;

    flex: 1 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;


`

export const HeaderLogin = styled.div `
    margin-bottom: 1rem;
    
    h3 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: .5rem;
    }

    span {
        display: block;

        a {
            text-decoration: none;
            font-weight: 500;
            color: ${main};

            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export const FormLogin = styled.form `
    flex: 1 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
    padding: 40px 30px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .1);

    input {
        width: 100%;
        height: 42px;
        padding: 0 10px;
        border-radius: 5px;
        border: 1px solid ${beige};
        outline: none;

        transition: ${transition};

        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);
        }
    }

    #sendFormLogin {
        border: none;
        color: white;
        font-size: 11pt;
        letter-spacing: .3px;
        background-color: ${main};
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
`

export const ContainerInputs = styled.div `
    position: relative;
    height: 42px;

    input {
        width: 100%;
        height: 100%;
        padding: 0 30px 0 10px;
        border-radius: 5px;
        border: 1px solid ${beige};
        outline: none;

        transition: ${transition};

        &:hover {
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);
        }
    }
`

export const MessageEmpty = styled.div `
    text-align: center;
`