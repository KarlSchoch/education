[Link to Figma](https://www.figma.com/design/M87nanj6Bxy7kOLfweYcyC/Reddit-Client?node-id=0-1&t=Af8GK9NQNsMLMMPr-1)
[Reddit Developer Link](https://www.reddit.com/prefs/apps)

# State
1. Subreddits Slice: List of subreddits that someone has followed, with an 'active' boolean
    - Name
    - Posts: Refernces the Post IDs that are associated with the subreddit
    - Photo
2. Posts Slice: List of posts that have the following
    - ID
    - Post text
    - Post image
    - Post time
    - Post metadata
        - User: Contains user ID of
        - Comments: References the comment IDs that are associated with the post
        - Up/down vote count
3. Comments
    - Comment Metadata
        - User
        - Creation time
    - Comment Text
4. Users
    - ID
    - Name
    - Photo

# Components
## Highest Level
1. Banner
2. Posts
3. Subreddits

## Section Breakdown
### Banner
1. Image
2. (COMPONENT) Search: Just text input

### Post List
1. (COMPONENT) Post
    - (COMPONENT) Post up/down vote
    - Post text
    - Post photo
    - Post time
    - (COMPONENT) User
    - (COMPONENT) Comment Toggle
    - (COMPONENT) Comment List
#### Post
##### Post up/down vote
##### Comment Toggle
1. Comment Count
2. Toggle: Defaults to false
##### Comment List
1. (COMPONENT) Comment
###### Comment
1. (COMPONENT) User
2. Time
3. Text
##### User
- Name
- Photo

### Subreddit
#### Subreddit Search
- Just a text input
#### Subreddit List
1. (COMPONENT) Subreddit
##### Subreddit
1. Name
2. Photo

# Execution
- [x] Create styling within separate components
- [x] Create react redux store and conduct initial wiring
- [] Evaluate data from Reddit API
- [] Create components
    - Order
        - Post (main body)
        - Comment/Comment List
    - Definition of Done
        - Passing Test
        - 

# Reddit API data
- Will probably need to create a a structure where I have a single homepage that creates a preview and then be able to "double-click" into a specific post
    - Preview contents: 
## api call pattern:
    - Individual subreddit: `https://www.reddit.com/r/<name-of-subreddit>.json`

    - search term: `https://www.reddit.com/search.json?q=cake%20recipes`
## Responses:
### Individual subreddit
- Key variables
    - data.children: gives you the list of posts (important keys within a child are listed below)
        - data: Contains the data for a given post
            - title: short description of the post
            - selftext: full text of the post
            - author: name of the author of the post
            - ups/downs: up/down vote count
            - subreddit_name_prefixed:  name of the subreddit, fully laid out
            - num_comments: self explanatory
            - preview
                - images
                    - source: Cotnains relevant information on the posts
                        - url:
                        - width:
                        - height:

    ```json
    {
        "kind": "Listing",
        "data": {
            "after": "t3_1m2f4at",
            "dist": 25,
            "modhash": "k14c6h00t5eedf1a02a5c17c1ffbee5ab80f46818e5be2ef7c",
            "geo_filter": null,
            "children": [
                {
                    "kind": "t3",
                    "data": {
                        "approved_at_utc": null,
                        "subreddit": "tragedeigh",
                        "selftext": "my friend (28F) is about eight months pregnant with a baby boy and she’s looking at names. she wanted something slightly different but still timeless, cute for a baby but still good for an adult.\nwe were really struggling until I suggested Timothy the other day. we’d been staying away from three syllable names to keep in line with her other children (Avis and Josie). i think Timothy would suit really nicely with those names, and she agreed.\nfast forward three days, i receive this text from her pretty much out of the blue. im not one to judge but im sure this counts as a tragedeigh. do i tell her the name sucks or just keep my mouth shut about it?",
                        "author_fullname": "t2_1il77wdgka",
                        "saved": false:,
                        "mod_reason_title": null,
                        "gilded": 0,
                        "clicked": false,
                        "title": "should i tell my friend her baby name is a tragedeigh?",
                        "link_flair_richtext": [],
                        "subreddit_name_prefixed": "r/tragedeigh",
                        "hidden": false,
                        "pwls": 6,
                        "link_flair_css_class": "",
                        "downs": 0,
                        "thumbnail_height": 140,
                        "top_awarded_type": null,
                        "hide_score": false,
                        "name": "t3_1m2adlq",
                        "quarantine": false,
                        "link_flair_text_color": "light",
                        "upvote_ratio": 0.94,
                        "author_flair_background_color": null,
                        "ups": 28246,
                        "total_awards_received": 0,
                        "media_embed": {},
                        "thumbnail_width": 140,
                        "author_flair_template_id": null,
                        "is_original_content": false,
                        "user_reports": [],
                        "secure_media": null,
                        "is_reddit_media_domain": true,
                        "is_meta": false,
                        "category": null,
                        "secure_media_embed": {},
                        "link_flair_text": "is it a tragedeigh?",
                        "can_mod_post": false,
                        "score": 28246,
                        "approved_by": null,
                        "is_created_from_ads_ui": false,
                        "author_premium": false,
                        "thumbnail": "https://b.thumbs.redditmedia.com/GBhROX4GHn-w86qKh-moRrZQYagYQKbKcRKAcgCJLno.jpg",
                        "edited": false,
                        "author_flair_css_class": null,
                        "author_flair_richtext": [],
                        "gildings": {},
                        "post_hint": "image",
                        "content_categories": null,
                        "is_self": false,
                        "subreddit_type": "public",
                        "created": 1752765659,
                        "link_flair_type": "text",
                        "wls": 6,
                        "removed_by_category": null,
                        "banned_by": null,
                        "author_flair_type": "text",
                        "domain": "i.redd.it",
                        "allow_live_comments": false,
                        "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;my friend (28F) is about eight months pregnant with a baby boy and she’s looking at names. she wanted something slightly different but still timeless, cute for a baby but still good for an adult.\nwe were really struggling until I suggested Timothy the other day. we’d been staying away from three syllable names to keep in line with her other children (Avis and Josie). i think Timothy would suit really nicely with those names, and she agreed.\nfast forward three days, i receive this text from her pretty much out of the blue. im not one to judge but im sure this counts as a tragedeigh. do i tell her the name sucks or just keep my mouth shut about it?&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                        "likes": null,
                        "suggested_sort": null,
                        "banned_at_utc": null,
                        "url_overridden_by_dest": "https://i.redd.it/vhj2kl27cgdf1.jpeg",
                        "view_count": null,
                        "archived": false,
                        "no_follow": false,
                        "is_crosspostable": true,
                        "pinned": false,
                        "over_18": false,
                        "preview": {
                            "images": [
                                {
                                    "source": {
                                        "url": "https://preview.redd.it/vhj2kl27cgdf1.jpeg?auto=webp&amp;s=1e619905ef5b62f1503b944ccffbf39f03388aa3",
                                        "width": 1170,
                                        "height": 2532
                                    },
                                    "resolutions": [
                                        {
                                            "url": "https://preview.redd.it/vhj2kl27cgdf1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=ef4b42a0ed6612073b428aa1a772d8b49893d97c",
                                            "width": 108,
                                            "height": 216
                                        },
                                        {
                                            "url": "https://preview.redd.it/vhj2kl27cgdf1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=3bd67e73388ceb283ebe1879a805d37834dac288",
                                            "width": 216,
                                            "height": 432
                                        },
                                        {
                                            "url": "https://preview.redd.it/vhj2kl27cgdf1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=e5c82c599678717b23e61f94d86559fc1345a054",
                                            "width": 320,
                                            "height": 640
                                        },
                                        {
                                            "url": "https://preview.redd.it/vhj2kl27cgdf1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=63bc4a122aae39f2508420a8a08538528b989c0b",
                                            "width": 640,
                                            "height": 1280
                                        },
                                        {
                                            "url": "https://preview.redd.it/vhj2kl27cgdf1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=7dd3968ae703b96a468e4d49b71a56aaf8ed5e85",
                                            "width": 960,
                                            "height": 1920
                                        },
                                        {
                                            "url": "https://preview.redd.it/vhj2kl27cgdf1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=263630dc08939d0df7934b1bf8a6b74cefdcfa5e",
                                            "width": 1080,
                                            "height": 2160
                                        }
                                    ],
                                    "variants": {},
                                    "id": "t1QRjAQd6kJGRZb6iYW5n_QibDglC1n-uLp0qmR5zPU"
                                }
                            ],
                            "enabled": true
                        },
                        "all_awardings": [],
                        "awarders": [],
                        "media_only": false,
                        "link_flair_template_id": "33f2f8e6-cf54-11ed-b4a2-e670fb5121fc",
                        "can_gild": false,
                        "spoiler": false,
                        "locked": false,
                        "author_flair_text": null,
                        "treatment_tags": [],
                        "visited": false,
                        "removed_by": null,
                        "mod_note": null,
                        "distinguished": null,
                        "subreddit_id": "t5_4y7u0c",
                        "author_is_blocked": false,
                        "mod_reason_by": null,
                        "num_reports": null,
                        "removal_reason": null,
                        "link_flair_background_color": "#0266b3",
                        "id": "1m2adlq",
                        "is_robot_indexable": true,
                        "report_reasons": null,
                        "author": "princess_peach5",
                        "discussion_type": null,
                        "num_comments": 6877,
                        "send_replies": true,
                        "contest_mode": false,
                        "mod_reports": [],
                        "author_patreon_flair": false,
                        "author_flair_text_color": null,
                        "permalink": "/r/tragedeigh/comments/1m2adlq/should_i_tell_my_friend_her_baby_name_is_a/",
                        "stickied": false,
                        "url": "https://i.redd.it/vhj2kl27cgdf1.jpeg",
                        "subreddit_subscribers": 601538,
                        "created_utc": 1752765659,
                        "num_crossposts": 5,
                        "media": null,
                        "is_video": false
                    }
                },
            ],
        }
    }
    ```