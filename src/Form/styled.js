import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
    border-radius: 5px;

    &:active {
        ${({ theme }) => theme.color.beige};
    }
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.cream};
    color: ${({ theme }) => theme.color.silver};
    border: none;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(80%);
    }
`;