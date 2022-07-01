import styled from 'styled-components';

import { Theme } from '../../theme';

const {
    beige,
    main,
    transition
} = Theme.light;

interface PropsNav {
    isMenuResponsive: string    
}
  

export const ContainerNav = styled.div `
    width: 230px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${beige};

    @media (max-width: 900px) {
        width: 100%;
        height: 60px;

        z-index: 3;
        padding: 0 40px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const ImageLogo = styled.div `
    margin-top: 20px;
    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
        margin-top: 0;
    }
` 

export const Nav = styled.nav<PropsNav> `
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
        margin-top: 60px;
        width: 270px;
        height: calc(100vh - 60px);
        position: fixed;
        top: 0;
        background-color: ${beige};
        transition: ${transition};
        right: ${(props) => props.isMenuResponsive};
        
    }
`

export const ButtonResponsive = styled.button `
    padding-top: 3px;
    background: none;
    border: none;
    font-size: 16pt;
    cursor: pointer;

    display: none;

    @media (max-width: 900px) {
        display: block;

        position: relative;
        z-index: 4;
    }
`
