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
                    'text': "It looks like this post is about Politics. Various methods of filtering out content relating to Politics can be found [here](https://www.reddit.com/r/pics/wiki/v2/resources/filter/politics).\n\n*I am a bot, and this action was performed automatically. Please [contact the moderators of this subreddit](/message/compose/?to=/r/pics) if you have any questions or concerns.*",
                }
            ]
        })

        // Teardown

    })

})