import styled from "styled-components";

import { Theme } from "../../theme";

const {
    main,
    transition
} = Theme.light;

export const Button = styled.button `
    position: absolute;
    font-size: 12pt;
    bottom: 20px;
    border: none;
    width: 100%;
    height: 45px;
    background: none;

    cursor: pointer;

    display: flex;
    gap: .3rem;
    align-items: center;
    justify-content: center;
    
    transition: ${transition};
    
    transform: translateX(-10px);

    i {
        visibility: hidden;
        padding-top: 2px;

        opacity: 0;
    }

    &:hover {
        transform: translateX(0px);

        i {
            visibility: visible;
            opacity: 1;
        }
    }
`