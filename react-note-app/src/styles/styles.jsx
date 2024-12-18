import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px 0px 25px 25px;
    @media (max-width: 650px) {
        padding: 20px;
    }
`

export const NotesContainer = styled.div`

`

export const EmptyMsgBox = styled.div`
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;

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
    padding: 6px 20px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 250ms background-color ease-in-out;
    white-space: nowrap;

    span {
        font-weight: 500;
        font-size: 1rem;
        margin-left: 5px;
    }

    border: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 600px) {
        padding: 6px 12px;
    }
`

export const NotesIconBox = styled.span`
    padding: 0 6px;
    cursor: pointer;
    svg {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        transition: 250ms color ease-in-out;
    }

    &:hover {
        svg {
            color: var(--primary_color);
        }
    }
`
