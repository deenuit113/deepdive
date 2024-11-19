import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBox, FixedContainer } from '../modal.styles';
import styled from 'styled-components';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { ButtonFill, ButtonOutline } from '../../../styles/styles';
import { toggleTagsModal } from '../../../store/modal/modalSlice';

const CreateNoteModal = () => {

    const dispatch = useDispatch();

    const { editNote } = useSelector(state => state.notesList);

    const [noteTitle, setNoteTitle] = useState(editNote?.title || '');
    const [value, setValue] = useState(editNote?.content || '');
    const [addedTag, setAddedTag] = useState(editNote?.tags || []);
    const [noteColor, setNoteColor] = useState(editNote?.color || '');
    const [priority, setPriority] = useState(editNote?.priority || 'low');

    return (
        <FixedContainer>
            <Box>
                <TopBox>
                    <div>노트 생성하기</div>
                    <DeleteBox
                        className='createNote__close-btn'
                    >
                        <FaTimes/>
                    </DeleteBox>
                </TopBox>
                <StyledInput />

                <AddedTagsBox>
                    {
                        addedTag.map(({ tag, id }) => (
                            <div key={id}>
                                <span className='createNote__tag'>{tag}</span>
                                <span
                                    className='createNote__tag-remove'
                                >
                                    <FaTimes/>
                                </span>
                            </div>
                        ))
                    }
                </AddedTagsBox>
                
                <OptionsBox>
                    <ButtonOutline
                        onClick={() => dispatch(toggleTagsModal({ type: 'add', view: true }))}
                    >
                        Add Tag
                    </ButtonOutline>
                    <div>
                        <label>배경색 : </label>
                        <select value={noteColor} onChange={(e) => setNoteColor(e.target.value)}>
                            <option value="">White</option>
                            <option value="#ffcccc">Red</option>
                            <option value="#ccffcc">Green</option>
                            <option value="#cce0ff">Blue</option>
                            <option value="#ffffcc">Yellow</option>
                        </select>
                    </div>
                </OptionsBox>
                
                <div
                    className='createNote__create-btn'
                >
                    <ButtonFill>
                        {
                            editNote ?
                            (<span>저장하기</span>) :
                            (<><FaPlus/><span>생성하기</span></>)
                        }
                    </ButtonFill>
                </div>
            </Box>
        </FixedContainer>
    )
}

const Box = styled.div`
    background-color: white;
    width: clamp(250px, 95%, 750px);
    color: black;
    border-radius: 10px;
    padding: 20px 18px 25px;

    .createNote__create-btn {
        display: flex;
        justify-content: flex-end;
    }
`;

const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .createNote__title {
        font-weight: 600;
        font-size: 1.3rem;
    }

    .createNote__close-btn{
        svg {
            font-size: 1.6rem
        }
    }

`;

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    user-select: none;
    outline: none;
    border 1px solid rgba(0, 0, 0, 0.2);
    text-indent: 15px;
    margin: 20px 0 10px;
    transition: 250ms box-shadow ease-in;
`;

const AddedTagsBox = styled.div`
    margin: 12px 0 30px;
    display: flex;
    
    div {
        display: flex;
        align-items: center;
        border: none;
        background-color: rgba(0,0,0,0.2);
        color: rgba(0,0,0,0.7);
        padding: 4px 10px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 500;
        margin-right: 10px;

        span {
            display: flex;
            align-items: center;
        }

        .createNote__tag {
            margin-right: 3px;
        }

        .createNote__tag-remove {
            cursor: pointer;
            padding: 2px;
        }
    }
`;

const OptionsBox = styled.div`

`


export default CreateNoteModal