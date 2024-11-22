import React from 'react';
import { useSelector } from 'react-redux';
import { Container, EmptyMsgBox } from '../../styles/styles';
import { useParams } from 'react-router-dom';
import MainWrapper from '../../components/MainWrapper/MainWrapper';

const TagNotes = () => {
    const { mainNotes } = useSelector(state => state.notesList);
    const { name } = useParams();
    let notes = [];
    mainNotes.forEach((note) => {
        if (note.tags.find(({ tag }) => tag ===  name)) {
            notes.push(note);
        }
    });

    return (
        <Container>
            {
                notes.length === 0 ?
                    (
                        <EmptyMsgBox>

                        </EmptyMsgBox>
                    ):
                    (
                        <MainWrapper
                            notes={notes} type=''
                        />
                    )
                
            }
        </Container>
    )
}

export default TagNotes