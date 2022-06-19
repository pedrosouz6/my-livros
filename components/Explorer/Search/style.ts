import styled from 'styled-components';

export const InputSearch = styled.input `
    width: 100%;
    height: 40px;

    padding: 0 10px;
    border-radius: 3px;
    border: 1px solid #D9D9D9;
    outline: none;

    transition: .3s ease-in-out;

    &:focus,
    &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    }
`
