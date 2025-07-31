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
    - [x] Update the UI structure to reflect the fact that we don't have a single page, but you can click into specific posts
    - [x] Make the structure of the posts element be dependent upon whether it is in the Main Page or Post Details
    - [x] potentially delete the comments slice.  Everything will just live within a post
    - [] Determine how to pass the post id's to display into the posts section
- [] Create components
    - Order
        - Post (main body)
        - Comment/Comment List
    - Definition of Done
        - Passing Tests
        - 

# Reddit API data
- Will probably need to create a a structure where I have a single homepage that creates a preview and then be able to "double-click" into a specific post
    - Preview contents: 


## api call pattern:
    - Individual subreddit: `https://www.reddit.com/r/<name-of-subreddit>.json`
    - search term: `https://www.reddit.com/search.json?q=cake%20recipes`
    - Individual Post `https://www.reddit.com/r/pics/comments/1m25a7v/trumps_swollen_ankles_at_fifa_club_world_cup.json` (replace last '/')
## Responses:
### Main Page
#### Notes
- Just going to show the title, author, and basic metadata (time posted, num comments, etc.)
- Title is going to be a link that takes you into the page for the specific post
- Need to create a unqiue id for each one of the posts for routing and then pass the permalink into 
#### Data Structure
- data.children: gives you the list of posts (important keys within a child are listed below)
    - kind: t3 indicates that it is a post
    - data: Contains the data for a given post
        - title: short description of the post
        - selftext: full text of the post
        - author: name of the author of the post
        - ups/downs: up/down vote count
        - subreddit_name_prefixed:  name of the subreddit, fully laid out
        - num_comments: self explanatory
        - preview
            - images: Only use the images in the post detail page
                - source: Contains relevant information on the posts
                    - url:
                    - width:
                    - height:
        - permalink: gives you the link to the reddit thread
### Individual Post
#### Notes
Only picking the top level comments, not going down to the next level (i.e. no replies)
#### Data Structure
- data.children: list of elements on the page
    - kind: t1 indicates that it is a comment, t3 indicates that it is a post
    - data: list of the comments
        - body: contains the actual comment
        - author: name of who published the comment
        - author_is_blocked: T/F of whether that author is blocked
        - banned_by: needs to be null
        - banned_at_utc: needs to be null
        - created: when it is created
        - ups: upvotes
        - downs: downvotes

# Post Structure
1. Need to decide what get's passed down to the components to be populated
2. Need to decide when/jpw to populate elements from the store

## Home Page
### Post
#### Rendering
- data.children.data
    - title, author, ups, downs, subreddit_name_prefixed, num_comments, permalink
#### Data population
Add the following elements to a post's state
- data.children.data.preview.images.source
    - url, width, height
### Comment
None
## Post Detail
### Post

#### Rendering

#### Data population
- data.children[el].kind == t1 -> state.posts.posts.metadata.comments 
    - author, body, created (need to translate this into a human readable date format), ups, downs
    - filter on author_is_blocked (T/F) and banned_by/banned_at_utc (null) to determine whether to add the post

### Comment
#### Rendering
#### Data population



# Implementing warning
1. Create async thunk for pulling in the data related to a post
2. Create function for prasing posts out of the
3. Create warning element that populates based on the error status