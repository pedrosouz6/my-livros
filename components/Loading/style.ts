import styled from 'styled-components';

export const ContainerLoading = styled.div `
    display: inline-block;
    width: 22px;
    height: 22px;

    ::after {
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 3px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`