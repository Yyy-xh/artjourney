import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        commentsList: [],
    },
    reducers: {
        addComment: (state, action) => {
            state.commentsList.push(action.payload);
        },
    },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
