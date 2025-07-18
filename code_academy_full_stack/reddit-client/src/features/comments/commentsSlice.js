import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
    status: 'idle',
    error: null,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        // add your reducers here
    },
    extraReducers: (builder) => {
        // handle async actions here
    },
});

export default commentsSlice.reducer;
// export const { /* export your actions here */ } = commentsSlice.actions;