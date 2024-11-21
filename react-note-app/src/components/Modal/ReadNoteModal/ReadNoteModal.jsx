import React from 'react';
import { DeleteBox, FixedContainer } from '../modal.styles';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { readNote } from '../../../store/notesList/notesListSlice';

const ReadNoteModal = ({ note, type }) => {
    const dispatch = useDispatch();
    return (
        <FixedContainer>
            <Box style={{ backgroundColor: note.color }}>
                <DeleteBox
                    className='readNote__close-btn'
                    onClick={() => dispatch(readNote({ type: type, id: note.id }))}
                >
                    <FaTimes/>
                </DeleteBox>
                <div className='readNote__title'>{parse(note.title)}</div>
                <div className='readNote__content'>{parse(note.content)}</div>
            </Box>
        </FixedContainer>
    )
}

const Box = styled.div`
    width: clamp(250px, 90%, 350px);
    background-color: white;
    max-height: 90vh;
    color: black;
    border-radius: 10px;
    padding: 20px 20px 25px;
    overflow-y: auto;

    .readNote__close-btn {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .readNote__title {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 12px;
    }

    .readNote__content {
        font-size: 15px;
        img {
            width: 100%;
            border-radius: 10px;
        }
    }
`

export default ReadNoteModal