import styled from 'styled-components';

import { Theme } from '../../../theme';

const {
    transition
} = Theme.light;

export const ContainerIndicate = styled.div `
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 10px;
    transform: translateY(-40%);
    
    i {
        color: red;
        display: block;
        padding: 3px 3px 0 3px;
    }

    span {
        display: block;
        width: 130px;

        text-align: center;
        font-size: 10pt;

        background-color: teal;
        color: white;
        box-shadow: 1px 1px 5px rgba(255, 255, 255, .2);

        padding: 5px;
        border-radius: 5px;

        position: absolute;
        top: 25px;
        right: -3px;

        visibility: hidden;
        opacity: 0;

        transition: ${transition};

        i {
            padding: 0 0 0 0;
            display: block;
            font-size: 20pt;
            position: absolute;
            top: -15px;
            right: 0;
            color: teal;
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`