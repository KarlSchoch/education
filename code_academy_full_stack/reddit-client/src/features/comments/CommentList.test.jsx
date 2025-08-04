import * as React from 'react';
import { screen, render, waitFor } from "@testing-library/react";

describe('CommentList', () => {
    afterEach(() => {
        // Maybe do something
    });
    
    it('Displays to user if there are no comments in the store', async () => {
        // Setup
        // Mock the store so that it has a post with no comments

        // Exercise

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