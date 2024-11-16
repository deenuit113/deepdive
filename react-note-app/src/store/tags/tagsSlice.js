import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    tagsList: [
        { tag: "learning", id: v4()},
        { tag: "work", id: v4()},
        { tag: "quotes", id: v4()},
    ]
}

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducer: {
        addTags: (state, { payload }) => {
            if(state.tagsList.find(({ tag }) => tag === payload.tag)) {
                
            } else {
                state.tagsList.push(payload);
            }
        },
        deleteTags: (state, { payload }) => {
            state.tagsList = state.tagsList.filter(({ id }) => id !== payload);
        },
    }
})

export const { addTags, deleteTags } = tagsSlice.actions;
export default tagsSlice.reducer;
