import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { parseRedditPosts } from '../../utils/parseRedditPosts';
import { parseRedditComments } from '../../utils/parseRedditComments';
import initialMainpageJson from '../../assets/api-data/initial-main-page-data.json'

// Async thunks
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, thunkAPI) => {
        const url = '/api/reddit/r/popular.json';
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch posts');
        return await response.json();
    }
);
export const fetchPostDetails = createAsyncThunk(
    'posts/fetchPostDetails',
    async ({postId, subreddit}, thunkAPI) => {
        const url = `/api/reddit/r/${subreddit}/comments/${postId}.json`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch post details');
        return await response.json();
    }
)

const parsed_posts = parseRedditPosts(initialMainpageJson)
const initial_posts = {}
parsed_posts.forEach((parsed_post) => {
    initial_posts[parsed_post.id] = parsed_post;
});

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: initial_posts,
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
            .addCase(fetchPostDetails.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const parsedPosts = parseRedditPosts(action.payload);
                state.posts = {};
                parsedPosts.forEach((post) => {
                    state.posts[post.id] = post;
                })
                state.error = null
            })
            .addCase(fetchPostDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const parsedComments = parseRedditComments(action.payload);
                const postId = Object.keys(parsedComments)[0]
                state.posts[postId].metadata.comments = parsedComments[postId];
                state.error = null;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchPostDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectUpVoteCt = (postId) => (state) => state.posts.posts[postId].metadata.upVoteCt;
export const selectDownVoteCt = (postId) => (state) => state.posts.posts[postId].metadata.downVoteCt;
export const selectCommentCt = (postId) => (state) => state.posts.posts[postId].metadata.commentCt;
export const selectTitle = (postId) => (state) => state.posts.posts[postId].title;
export const selectSubreddit = (postId) => (state) => state.posts.posts[postId].subreddit;
export const selectStatus = state => state.status;
export const selectPostIds = createSelector(
    [(state) => state.posts.posts],
    (posts) => Object.keys(posts || {})
);

export default postSlice.reducer;