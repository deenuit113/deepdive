import React from 'react'
import { useSelector } from 'react-redux'
import { Container, EmptyMsgBox } from '../../styles/styles';
import MainWrapper from '../../components/MainWrapper/MainWrapper';

const ArchiveNotes = () => {
    const { archiveNotes } = useSelector(state => state.notesList);
    return (
        <Container>
            {
                archiveNotes.length === 0 ?
                    (
                        <EmptyMsgBox>

                        </EmptyMsgBox>
                    ):
                    (
                        <MainWrapper
                            notes={archiveNotes} type='archive'
                        />
                    )
                
            }
        </Container>
    )
}

export default ArchiveNotes