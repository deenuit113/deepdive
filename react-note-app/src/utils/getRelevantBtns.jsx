import { NotesIconBox } from "../styles/styles";
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import { RiInboxUnarchiveFill } from 'react-icons/ri';

const getRelevantBtns = (type, note, dispatch) => {
    if(type === 'archive') {
        return (
            <>
                <NotesIconBox
                    data-info="Unarchive"
                >
                    <RiInboxUnarchiveFill
                        style={{ cursor: 'pointer', color: 'gray' }}
                    />
                </NotesIconBox>
                <NotesIconBox
                    data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    } else if(type === 'trash'){
        return (
            <>
                <NotesIconBox
                    data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
                <NotesIconBox
                    data-info="Restore"
                >
                    <FaTrashRestore/>
                </NotesIconBox>
            </>
        )
    } else {
        return (
            <>
                <NotesIconBox
                    data-info="Edit"
                >
                    <FaEdit/>
                </NotesIconBox>
                <NotesIconBox
                    data-info="archive"
                >
                    <FaArchive/>
                </NotesIconBox>
                <NotesIconBox
                    data-info="Delete"
                >
                    <FaTrash/>
                </NotesIconBox>
            </>
        )
    }

}

export default getRelevantBtns;