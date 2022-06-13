import styled from 'styled-components';

import { Theme } from '../../theme';

const {
    beige,
    main
} = Theme.light;

export const ContainerNav = styled.div `
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
    }

    li a {
        display: block;
        height: 45px;
        line-height: 45px;

        padding: 0 10px;
        cursor: pointer;
    }

    li .active {
        background-color: ${main};
    }
`