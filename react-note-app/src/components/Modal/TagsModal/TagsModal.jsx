import React, { useState } from 'react'
import { DeleteBox, FixedContainer } from '../modal.styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTagsModal } from '../../../store/modal/modalSlice';
import styled from 'styled-components';
import getStandardName from '../../../utils/getStandardName';
import { FaTimes } from 'react-icons/fa';
import { addTags, deleteTags } from '../../../store/tags/tagsSlice';
import { v4 } from "uuid";
import { removeTags } from '../../../store/notesList/notesListSlice';

const TagsModal = ({ type }) => {
    const dispatch = useDispatch();
    const { tagsList } = useSelector(state => state.tags);
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputText) return;
        dispatch(addTags({ tag: inputText.toLowerCase(), id: v4() }));
        setInputText('');
    }

    const handleDeleteClick = (tag, id) => {
        dispatch(deleteTags(id));
        dispatch(removeTags(tag));
    }

    return (
        <FixedContainer>
                <Box>
                    <div className='editTags__header'>
                        <div className='editTags__title'>
                            {type === 'add' ? 'Add' : 'Edit'} Tags 
                        </div>
                        <DeleteBox
                            className="editTags__close"
                            onClick={() => dispatch(toggleTagsModal({ type, view: false }))}>

                                <FaTimes/>
                        </DeleteBox>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <StyledInput
                            type='text'
                            placeholder='New tag...'
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                    </form>
                    <TagsBox>
                        {
                            tagsList.map(({ tag, id}) => (
                                <li key={id}>
                                    <div className='editTags__tag'>{getStandardName(tag)}</div>
                                    <DeleteBox onClick={() => handleDeleteClick(tag, id)}>
                                        <FaTimes/>
                                    </DeleteBox>
                                </li>
                            ))
                        }

                    </TagsBox>
                </Box>
        </FixedContainer>
    )
}

const Box = styled.div`
    width: clamp(250px, 60%, 280px);
    max-height: 85vh;
    overflow-y: auto;
    background-color: white;
    color: black;
    border-radius: 5px;
    padding: 15px 20px;

    .editTags__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .editTags__title {
            font-weight: 500;
            font-size: 1.3rem;
        }
        .editTags__close {
            svg {
                font-size: 1.6rem;
            }
        }
    }

    form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        margin: 30px 0;
    }
`

const StyledInput = styled.input`
    height: 100%:
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    transition: 150ms border ease-in;
    font-size: 1rem;
    font-weight: 500;
    $:focus {
        border-bottom: 2px solid black;
    }
    $::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
`

const TagsBox = styled.div`
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.2rem;
        height: 30px;
        margin-bottom: 10px;
    }
`

export default TagsModal
