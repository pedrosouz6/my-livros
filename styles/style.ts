import styled from 'styled-components';

export const Title = styled.h2 `
    font-size: 1.2rem;
`

export const LinkA = styled.a `
    color: #333;
`

export const Container = styled.div `
    position: absolute;
    top: 0;
    width: calc(100% - 230px);
    height: auto;
    left: 230px;
    padding: 20px 40px;
    z-index: 2;

    @media (max-width: 900px) {
        width: 100%;
        left: 0;
        top: 60px;
    }
`

export const ContainerCenter = styled.div `
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`