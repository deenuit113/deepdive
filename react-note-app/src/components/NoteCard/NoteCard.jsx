import React from 'react'
import styled from 'styled-components';
import { NotesIconBox } from '../../styles/styles';
import { BsFillPinFill } from 'react-icons/bs';
import getRelevantBtns from '../../utils/getRelevantBtns';
import { useDispatch } from 'react-redux';
import { readNote, setPinnedNotes } from '../../store/notesList/notesListSlice';
import parse from 'html-react-parser';
import ReadNoteModal from '../Modal/ReadNoteModal/ReadNoteModal';


const NoteCard = ({ note, type }) => {
    const { title, content, tags, color, priority, date, isPinned, isRead, id } = note;
    
    const func = () => {
        const imgContent = content.includes('img');
        if(imgContent) {
            return content;
        } else {
            return content.length > 75 ? content.slice(0, 75) + "..." : content;
        }
    }

    const dispatch = useDispatch();
    return (
        <>
            {
                isRead && <ReadNoteModal note={note} type={type}/>
            }
            <Card style={{backgroundColor: color}}>
                <TopBox>
                    <div className='noteCard__title'>
                        {title.length > 10 ? title.slice(0, 10) + " ..." : title}
                    </div>
                    <div className='noteCard__top-options'>
                        <span className='noteCard__priority'>
                            {priority}
                        </span>
                        {
                            type !== "archive" && type !== "trash" && (
                                <NotesIconBox
                                    className="noteCard__pin"
                                    onClick={() => dispatch(setPinnedNotes({ id }))}
                                >
                                    <BsFillPinFill
                                        style={{ color: isPinned ? "red": "lightgrey" }}
                                    />
                                </NotesIconBox>
                            )
                        }
                    </div>
                </TopBox>
                <ContentBox onClick={() => dispatch(readNote({ type, id }))}>
                    {parse(func())}
                </ContentBox>
                <TagsBox>
                    {
                        tags?.map(({tag, id}) => (
                            <span key={id}>{tag}</span>
                        ))
                    }
                </TagsBox>
                <FooterBox>
                    <div className='noteCard__date'>
                        {date}
                    </div>
                    <div>
                        {getRelevantBtns( type, note, dispatch)}
                    </div>
                </FooterBox>
            </Card>
        </>
    )
}

const Card = styled.div`
    width: clamp(250px, 100%, 265px);
    height: 220px;
    border-radius: 8px;
    box-shadow: 0px 1.5px 3px 0.3px rgb(0, 0, 0, 0.5);
    padding: 20px;
    margin: 0 35px 35px 0;
    background-color: white;
    transition: 250ms box-shadow ease-in-out, 200ms transform ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 6px 0px rgb(0, 0, 0, 0.6);
    }

    @media (min-width: 600px) {
        margin-right: 0px;
    }
`;

const ContentBox = styled.div`
    width: 100%;
    height: 65px;
    margin: 15px 0 10px;
    font-size: 9px;
    cursor: pointer;
    overflow-y: hidden;

    img {
        width: 80px;
        height: 65px;
        border-radius: 5px;
    }
`;

const TagsBox = styled.div`
    height: 25px;
    margin-bottom: 15px;
    overflow: scroll;
    span {
        display: inline;
        background-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.7);
        padding: 2px 5px;
        border-radius: 5px;
        font-size: 11px;
        font-weight: 500;
        margin-right: 8px;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .noteCard__title {
        font-weight: 600;
        font-size: 1.15rem;
        cursor: pointer;
    }

    .noteCard__top-options {
        white-space: nowrap;
        margin-left: 8px;

        .noteCard__priority {
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 600;
            margin-right: 10px;
        }

        .noteCard__pin {
            svg {
                font-size: 15px;
            }
        }
    }

`

const FooterBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .noteCard__date {
        font-size: 12px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.6);
    }
`


export default NoteCard