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
    reducer: {}
})

export default notesListSlice.reducer;
