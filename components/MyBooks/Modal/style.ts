import styled from 'styled-components';

import { Theme } from '../../../theme';

const {
    black,
    white,
    main,
    beige
} = Theme.light;

export const ContainerModal = styled.div `
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    top: 0;
    left: 0;

    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Modal = styled.div `
    flex: 1;
    max-width: 700px;
    height: calc(90vh - 80px);
    background-color: ${white};
    border-radius: 3px;
`

export const HeaderModal = styled.header `
    width: 100%;
    height: 50px;
    background-color: ${main};

    padding: 0 20px;
    border-radius: 3px 3px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: none;

        color: white;

        padding: 5px 2px 0 2px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
    }

    h3 {
        color: white;
        font-weight: 500;
        letter-spacing: .3px;
    }
`

export const ContentModal = styled.div `
    padding: 20px;
`

export const ChooseModal = styled.div `
    display: flex;

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

export const TitleSection = styled.h4 `
    padding-top: 1rem;
    border-top: 1px solid ${beige};
`