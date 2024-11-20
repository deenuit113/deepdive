import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBox, FixedContainer } from '../modal.styles';
import styled from 'styled-components';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { ButtonFill, ButtonOutline } from '../../../styles/styles';
import { toggleCreateNoteModal, toggleTagsModal } from '../../../store/modal/modalSlice';
import { setEditNote } from '../../../store/notesList/notesListSlice';
import TagsModal from '../TagsModal/TagsModal';
import { v4 } from 'uuid';
import TextEditor from '../../TextEditor/TextEditor';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const CreateNoteModal = () => {

    const dispatch = useDispatch();

    const { editNote } = useSelector(state => state.notesList);
    const { viewAddTagsModal } = useSelector(state => state.modal);

    const [noteTitle, setNoteTitle] = useState(editNote?.title || '');
    const [value, setValue] = useState(editNote?.content || '');
    const [addedTag, setAddedTag] = useState(editNote?.tags || []);
    const [noteColor, setNoteColor] = useState(editNote?.color || '');
    const [priority, setPriority] = useState(editNote?.priority || 'low');

    const handleCloseNoteModal = () => {
        dispatch(setEditNote(null));
        dispatch(toggleCreateNoteModal(false));
    };

    const handleTags = (tag, type) => {
        const newTag = tag.toLowerCase();
        if(type === "add") {
            setAddedTag(prev => [...prev, { tag: newTag, id: v4() }]);
        } else {
            setAddedTag(addedTag.filter(({ tag }) => tag !== newTag))
        }
    }

    const handleCreateNote = () => {
        if(!noteTitle) {
            toast.error("제목을 넣어주세요.");
        } else if(value === "<p><br></p>") {
            toast.error("내용을 넣어주세요.");
        }
    }

    let note = {
        title: noteTitle,
        content: value,
        tags: addedTag,
        color: noteColor,
        priority: priority,
        editedTime: new Date().getTime()
    }

    const date = dayjs().format("DD/MM/YY h:mm A");

    if(editNote) {
        note = { ...editNote, ...note }
    } else {
        note = {
            ...note,
            isPinned: false,
            isRead: false,
            editedTime: null,
            id: v4(),
            createdTime: new Date().getTime(),
            date,
        }
    }

    return (
        <FixedContainer>

            {
                viewAddTagsModal && (
                    <TagsModal type="add" addedTag={addedTag} handleTags={handleTags}/>

                )
            }

            <Box>
                <TopBox>
                    <div>노트 생성하기</div>
                    <DeleteBox
                        onClick={handleCloseNoteModal}
                        className='createNote__close-btn'
                    >
                        <FaTimes/>
                    </DeleteBox>
                </TopBox>
                <StyledInput 
                    type="text"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    placeholder="제목"
                />

                <div>
                    <TextEditor 
                        value={value} 
                        setValue={setValue} 
                        color={noteColor}
                    />
                </div>

                <AddedTagsBox>
                    {
                        addedTag.map(({ tag, id }) => (
                            <div key={id}>
                                <span className='createNote__tag'>{tag}</span>
                                <span
                                    className='createNote__tag-remove'
                                    onClick={() => handleTags(tag, "remove")}
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
                        <label htmlFor='color'>배경색 : </label>
                        <select id="color" value={noteColor} onChange={(e) => setNoteColor(e.target.value)}>
                            <option value="">White</option>
                            <option value="#ffcccc">Red</option>
                            <option value="#ccffcc">Green</option>
                            <option value="#cce0ff">Blue</option>
                            <option value="#ffffcc">Yellow</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor='priority'>우선순위 :</label>
                        <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="low">Low</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </OptionsBox>
                
                <div
                    className='createNote__create-btn'
                >
                    <ButtonFill onClick={() => handleCreateNote()}>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 25px;
    
    select {
        font-size: 14px;
        padding: 5px;
        user-select: none;
        outline: none;
        border: none;
        box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.5);
        border-radius: 3px;
    }

    label {
        font-size: 14px;
    }
`


export default CreateNoteModal