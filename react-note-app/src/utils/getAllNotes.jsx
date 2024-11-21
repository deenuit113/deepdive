import NoteCard from "../components/NoteCard/NoteCard";
import { NotesContainer } from "../styles/styles";

const filteredNotes = (notes, filter) => {
    if(filter === "low") {
        return 
    } else if (filter === "high") {
        return
    } else if (filter === "latest") {
        return
    } else if (filter === "created") {
        return
    } else if (filter === "edited") {
        return
    } else {
        return notes;
    }
}

const getAllNotes = (mainNotes, filter) => {

    const pinned = mainNotes.filter(({ isPinned }) => isPinned); 
    const normal = mainNotes.filter(({ isPinned }) => !isPinned);

    if(normal.length !== 0 && pinned.length === 0) {
        return (
            <>
                <div className="allNotes__notes-type">
                    All Notes <span>({normal.length})</span>
                </div>
                <NotesContainer>
                    {filteredNotes(normal, filter).map((note) => (
                        <NoteCard 
                            key={note.id} 
                            note={note} 
                            type="notes"
                        />
                    ))}
                </NotesContainer>
            </>
        )
    }

    if(pinned.length !== 0 && normal.length === 0) {
        return (
            <>
                <div className="allNotes__notes-type">
                    Pinned Notes <span>({pinned.length})</span>
                </div>
                <NotesContainer>
                    {
                        pinned.map((note) => (
                            <NoteCard 
                                key={note.id} 
                                note={note} 
                                type="notes"
                            />
                        ))
                    }
                </NotesContainer>
            </>
        )
    }

    if(pinned.length !== 0 && normal.length !== 0) {
        return (
            <>
                <div>
                    <div className="allNotes__notes-type">
                        Pinned Notes <span>({pinned.length})</span>
                    </div>
                    <NotesContainer>
                        {
                            pinned.map((note) => (
                                <NoteCard 
                                    key={note.id} 
                                    note={note} 
                                    type="notes"
                                />
                            ))
                        }
                    </NotesContainer>
                </div>
                <div>
                    <div className="allNotes__notes-type">
                        All Notes <span>({normal.length})</span>
                    </div>
                    <NotesContainer>
                        {filteredNotes(normal, filter).map((note) => (
                            <NoteCard 
                                key={note.id} 
                                note={note} 
                                type="notes"
                            />
                        ))}
                    </NotesContainer>
                </div>
            </>
        )
    }

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