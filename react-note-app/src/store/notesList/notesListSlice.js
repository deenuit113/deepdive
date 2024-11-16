import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mainNotes: [],
    archiveNotes: [],
    trashNotes: [],
    editNote: null
}

const notesListSlice = createSlice({
    name: "notesList",
    initialState,
    reducer: {
        removeTags: (state, { payload }) => {
            state.mainNotes = state.mainNotes.map((note) => ({
                ...note,
                tags: note.tags.filter(({ tag }) => tag !== payload.tag),
            }))
        }
    }
})

export const { removeTags } = notesListSlice.actions;
export default notesListSlice.reducer;
