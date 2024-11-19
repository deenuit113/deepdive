import { NotesIconBox } from "../styles/styles";
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import { RiInboxUnarchiveFill } from 'react-icons/ri';
import { deleteNote, restoreNote, setArchiveNotes, setEditNote, setTrashNotes, unArchiveNote } from "../store/notesList/notesListSlice";
import { toggleCreateNoteModal } from "../store/modal/modalSlice";

const getRelevantBtns = (type, note, dispatch) => {
    const handleClick = () => {
        dispatch(setEditNote(note));
        dispatch(toggleCreateNoteModal(true));
    }

    if(type === 'archive') {
        return (
            <>
                <NotesIconBox
                    data-info="Unarchive"
                    onClick={() => dispatch(unArchiveNote(note))}
                >
                    <RiInboxUnarchiveFill
                        style={{ fontSize: '1rem' }}
                    />
                </NotesIconBox>
                <NotesIconBox
                    data-info="Delete"
                    onClick={() => dispatch(setTrashNotes(note))}
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    } else if(type === 'trash'){
        return (
            <>
                <NotesIconBox
                    data-info="Restore"
                    onClick={() => dispatch(restoreNote(note))}
                >
                    <FaTrashRestore/>
                </NotesIconBox>
                <NotesIconBox
                    data-info="Delete"
                    onClick={() => dispatch(deleteNote(note))}
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    } else {
        return (
            <>
                <NotesIconBox
                    data-info="Edit"
                    onClick={handleClick}
                >
                    <FaEdit/>
                </NotesIconBox>
                <NotesIconBox
                    data-info="Archive"
                    onClick={() => dispatch(setArchiveNotes(note))}
                >
                    <FaArchive/>
                </NotesIconBox>
                <NotesIconBox
                    data-info="Delete"
                    onClick={() => dispatch(setTrashNotes(note))}
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    }

}

export default getRelevantBtns;