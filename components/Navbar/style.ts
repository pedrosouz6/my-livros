import styled from 'styled-components';

import { Theme } from '../../theme';

const {
    beige,
    main
} = Theme.light;

export const Container = styled.div `
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${beige};
`

export const Nav = styled.nav `
    ul {
        list-style: none;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li a {
        display: block;
        height: 40px;
        line-height: 40px;

        padding: 0 10px;
        cursor: pointer;
    }

    li .active {
        background-color: ${main};
    }
`