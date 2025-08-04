import * as React from 'react';
import { screen, render, waitFor } from "@testing-library/react";
import configureMockStore from 'redux-mock-store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CommentList from './CommentList';
import { Provider } from 'react-redux';

describe('CommentList', () => {
    afterEach(() => {
        // Maybe do something
    });
    
    it('Displays to user if there are no comments in the store', async () => {
        // Setup
        // Mock the store so that it has a post with no comments
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
                            comments: [],
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
            expect( screen.queryByTestId('comment-list-warning') ).toBeInTheDocument();
        }, {timeout: 3000})

        // Teardown
    })

    it('Displays Comment components', async () => {
        // Setup
        // Mock the store so that it has a post with a few comments

        // Exercise

        // Verify
        // 1. Comment array has the correct length based on what is in the store
        await waitFor(() => {
            expect( screen.queryAllByTestId('comment-class') ).toHaveLength(2);
        }, {timeout: 3000})

        // Teardown
    })
})