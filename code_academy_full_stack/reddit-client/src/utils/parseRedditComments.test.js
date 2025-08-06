import singlePageJSON from '../assets/api-data/sample-single-page-data.json'
import { parseRedditComments } from './parseRedditComments'

describe('parseRedditComments', () => {

    it('Extract comments for a given post', async () => {
        // Setup
        // 1. Import the JSON

        // Exercise
        const res = parseRedditComments(singlePageJSON)
        // function needs to validate that child is kind == "t1"

        // Verify
        expect(res).toEqual({
            '1m25a7v': [
                {
                    'timestamp': 1752752450,
                    'user': "AutoModerator",
                    'text': "Something simpler to deal with from a format perspective",
                }
            ]
        })

        // Teardown

    })

})