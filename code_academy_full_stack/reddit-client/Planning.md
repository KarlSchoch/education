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
        - Post Time
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
