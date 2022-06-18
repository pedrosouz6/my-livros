import styled from 'styled-components';

import { Theme } from '../../theme';

const {
    beige,
    main
} = Theme.light;

export const ContainerNav = styled.div `
    width: 230px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: ${beige};

    @media (max-width: 900px) {
        width: 100%;
        height: 60px;

        padding: 0 40px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: red;
    }
`

export const ImageLogo = styled.div `
    margin-top: 20px;
    display: flex;
    justify-content: center;
` 

export const Nav = styled.nav `
    margin-top: 2rem;

    ul {
        list-style: none;

        display: flex;
        flex-direction: column;
    }

    li a {
        display: block;
        height: 45px;
        line-height: 45px;

        padding: 0 20px;
        cursor: pointer;
    }

    li .active {
        background-color: ${main};
        color: white;
    }

    @media (max-width: 900px) {
        margin-top: 0rem;
        width: 200px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        background-color: blue;
    }
`