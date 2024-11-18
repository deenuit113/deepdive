import NoteCard from "../components/NoteCard/NoteCard";
import { NotesContainer } from "../styles/styles";

const getAllNotes = (mainNotes, filter) => {
    return (
        <>
            <div className="allNotes__notes-type">
                All Notes
            </div>
            <NotesContainer>
                {
                    mainNotes.map((note) => (
                        <NoteCard 
                            key={note.id} 
                            note={note} 
                            type="notes"  // | "archive" | "trash"
                        />
                    ))
                }
            </NotesContainer>
        </>
    )
}

export default getAllNotes;