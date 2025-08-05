import * as React from 'react';
import { screen, render, waitFor } from "@testing-library/react";
import configureMockStore from 'redux-mock-store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CommentList from './CommentList';
import { Provider } from 'react-redux';

storeSetup = ( commentList = [] ) => {
    const mockStore = configureMockStore();
    const mockState = {
        posts: {
            posts: {
                'abc123': { 
                    id: 'abc123',
                    title: 'Hello world',
                    text: 'Hello world',
                    subreddit: 'r/happy',
                    img: null,
                    timePosted: Date.now(),
                    metadata: {
                        user: 'k42',
                        comments: commentList,
                        upVoteCt: 1,
                        downVoteCt: 0,
                        commentCt: 0 
                    } 
                }
            },
            status: 'succeeded',
            error: null
        }
    };
    const store = mockStore(mockState);

    return store
}

describe('CommentList', () => {

    afterEach(() => {
        // Maybe do something
    });
    
    it('Displays to user if there are no comments in the store', async () => {
        // Setup
        // Mock the store so that it has a post with no comments
        const store = storeSetup([])

        // Exercise
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/post/abc123']}>
                    <Routes>
                        <Route path="/post/:id" element={<CommentList />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        )

        // Verify
        // 1. No comments are present
        await waitFor(() => {
            expect( screen.queryByTestId('no-content-warning') ).toBeInTheDocument();
        }, {timeout: 3000})

        // Teardown
    })

    it('Displays Comment components', async () => {
        // Setup
        // Mock the store so that it has a post with a few comments
        const comments  = [
            {
                'timestamp': Date.now(),
                'user': 'bigPapi',
                'text': 'This is brilliant',
            },
            {
                'timestamp': Date.now(),
                'user': 'BanditoBandit',
                'text': 'This is dumb',
            }
        ]
        const store = storeSetup(comments)

        // Exercise
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/post/abc123']}>
                    <Routes>
                        <Route path="/post/:id" element={<CommentList />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        )

        // Verify
        // 1. Comment array has the correct length based on what is in the store
        await waitFor(() => {
            expect( screen.queryAllByTestId('comment-class') ).toHaveLength(2);
        }, {timeout: 3000})

        // Teardown
    })
})