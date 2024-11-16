import styled from 'styled-components';

export const Container = styled.div`

`

export const NotesContainer = styled.div`

`

export const EmptyMsgBox = styled.div`

`

export const ButtonFill = styled.button`
    padding: 6px 20px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
    transition: 250ms background-color ease-in-out;
    span {
        font-weight: 500;
        font-size: clamp(15px 3.5vw, 15px);

    }
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);

    &:hover {
        background-color: var(253, 239, 195, 0.5);
    }

    @media (max-width: 600px) {
        padding: 6px 12px;
    }
`

export const ButtonOutline = styled.button`

`

export const NotesIconBox = styled.span`

`
