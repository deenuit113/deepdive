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
