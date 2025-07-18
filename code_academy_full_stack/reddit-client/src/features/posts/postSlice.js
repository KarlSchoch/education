import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Example async thunk for fetching posts
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, thunkAPI) => {
        // Replace with your API call
        const response = await fetch('/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        return await response.json();
    }
);

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {
            123: {
                text: 'Something really witty',
                img: null,
                timePosted: '9:07 AM July 1st, 2025',
                metadata: {
                    user: 'big-brain-97',
                    comments: [],
                    upVoteCt: 2,
                    downVoteCt: 1,
                }
            },
            456: {
                text: 'Something really dumb',
                img: null,
                timePosted: '9:08 AM July 1st, 2025',
                metadata: {
                    user: 'small-brain-97',
                    comments: [],
                    upVoteCt: 1,
                    downVoteCt: 1012,
                }
            },
        },
        status: 'idle',
        error: null,
    },
    reducers: {
        // Add your synchronous reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectUpVoteCt = (id) => (state) => state.posts.posts[id].metadata.upVoteCt;
export const selectDownVoteCt = (id) => (state) => state.posts.posts[id].metadata.downVoteCt;

export default postSlice.reducer;