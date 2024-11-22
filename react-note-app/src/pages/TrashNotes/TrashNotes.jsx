import React from 'react'
import { Container, EmptyMsgBox } from '../../styles/styles';
import MainWrapper from '../../components/MainWrapper/MainWrapper';
import { useSelector } from 'react-redux';

const TrashNotes = () => {
    const { trashNotes } = useSelector(state => state.notesList);
    return (
        <Container>
            {
                trashNotes.length === 0 ?
                    (
                        <EmptyMsgBox>

                        </EmptyMsgBox>
                    ):
                    (
                        <MainWrapper
                            notes={trashNotes} type='trash'
                        />
                    )
                
            }
        </Container>
    )
}

export default TrashNotes