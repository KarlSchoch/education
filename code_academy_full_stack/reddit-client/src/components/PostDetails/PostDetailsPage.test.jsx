import * as React from 'react';
import { screen } from "@testing-library/react";
import { renderWithReduxAndRouter } from '../../../test-utils';

describe('PostDetails', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    
    it('Includes error message if unable to ', async () => {
        // Setup
        jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network down'));

        // Exercise
        renderWithReduxAndRouter('/post/1m2adlq');

        // Verify
        expect(await screen.findByTestId('comment-fetch-warning')).toBeInTheDocument()

        // Teardown
    })

    // it('Renders PostDetails component with successful API Call ', async () => {
    //     // Setup

    //     // Exercise
    //     await React.act(async () => {
    //         renderWithReduxAndRouter('/post/1m2adlq');
    //     })

    //     // Verify
    //     // 1. 

    //     // Teardown
    // })
})