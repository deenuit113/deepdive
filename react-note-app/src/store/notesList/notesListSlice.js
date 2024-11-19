import { createSlice } from "@reduxjs/toolkit"
import notes from "../../notesData";

const initialState = {
    mainNotes: [...notes],
    archiveNotes: [],
    trashNotes: [],
    editNote: null
}

const notesListSlice = createSlice({
    name: "notesList",
    initialState,
    reducers: {
        setArchiveNotes: (state, { payload }) => {
            state.mainNotes = state.mainNotes.filter(({ id }) => id !== payload.id);
            state.archiveNotes.push({...payload, isPinned: false});
        },
        unArchiveNote: (state, { payload }) => {
            state.archiveNotes = state.archiveNotes.filter(({ id }) => id !== payload.id);
            state.mainNotes.push(payload);
        },
        setTrashNotes: (state, { payload }) => {
            state.mainNotes = state.mainNotes.filter(({ id }) => id !== payload.id);
            state.archiveNotes = state.archiveNotes.filter(({ id }) => id !== payload.id);
            state.trashNotes.push({...payload, isPinned: false});
        },
        restoreNote: (state, { payload }) => {
            state.trashNotes = state.trashNotes.filter(({ id }) => id !== payload.id);
            state.mainNotes.push(payload);
        },
        deleteNote: (state, { payload }) => {
            state.trashNotes = state.trashNotes.filter(({ id }) => id !== payload);
        },
        removeTags: (state, { payload }) => {
            state.mainNotes = state.mainNotes.map((note) => ({
                ...note,
                tags: note.tags.filter(({ tag }) => tag !== payload.tag),
            }))
        },
        setEditNote: (state, { payload }) => {
            state.editNote = payload;
        },
        setPinnedNotes: (state, { payload }) => {
            state.mainNotes = state.mainNotes.map((note) =>
                note.id === payload.id? { ...note, isPinned: !note.isPinned } : note
            );
        },
        readNote: (state, { payload }) => {
            const { type, id } = payload;
            const setRead = (notes) => {
                state[notes] = state[notes].map((note) =>
                note.id === id ? { ...note, isRead: !note.isRead } : note)
            }
            if(type === 'archive') {
                setRead('archiveNotes');
            } else if (type === 'trash') {
                setRead('trashNotes');
            } else {
                setRead('mainNotes');
            }
        },
    }
})

export const {
    setArchiveNotes,
    unArchiveNote,
    setTrashNotes,
    restoreNote,
    deleteNote, 
    removeTags,
    setEditNote,
    setPinnedNotes,
} = notesListSlice.actions;
export default notesListSlice.reducer;
