import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.color.cream};
    color: ${({ theme }) => theme.color.silver};
    border-radius: 5px;
    transition: filter 0.5s;
    margin: 3px;
    padding: 8px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    font-size: 14px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px
    }

    &:hover {
        filter: brightness(85%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;