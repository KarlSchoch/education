# 1. Creating static components
Required Components
1. App
2. SearchBar
3. SearchResults
4. Playlist
5. Tracklist
7. Track

Layout
- SearchBar on the top (75% L -> R width, 10% T -> B)
- SearchResults: Stacked beneath SearchBar (90% T -> B)
- Playlist contains a tracklist that contains tracks (track consists of a song's title, artist, and album)
    - all on the right 1/4 of the screen

# 2. Passing down track information to the track component
- [Spotify search docs](https://developer.spotify.com/documentation/web-api/reference/search)
- Request:
    - sample curl: `curl --request GET --url 'https://api.spotify.com/v1/search?q=American+Girl&type=track&market=US&limit=2' --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'`
    - Parameters
        - endpoint: https://api.spotify.com/v1/search
        - q: song name
        - type: `track`
        - market: `US`
        - limit: `10`
1. Create a top level (i.e. within App.jsx) state variable that is related to the search results.  For now, just keep this a list of five tracks
    - Issue: how do I parse what is coming out of the slack response?  This list of five tracks is going to have to be something that is dependent upon an output from "SearchBar" and then shown in the "SearchResults"
    - 

Data Flow
 `Playlist` (name, list of playlist tracks) -> `Tracklist` -> List of x `Tracks`

 SearchBar -> searchTracks (state variable) -> SearchResults -> Can add a list of tracks to 

# 3. Adding Songs to Custom Playlist

**Task Description**
> Your Jammming web app should allow users to add songs from the search results to their custom playlist. To achieve this, implement a method that adds a selected song from the search results track list to the user’s custom playlist. The method should be triggered when the user clicks an “add” button displayed next to each track in the search results list.

Issues
- Clicking on a track in the `SearchResults` component, passing that *up* into the `App` component, and having it update the `playlistTracklist` state variable
    1. Add state relevant to both components (i.e. `playlistTracklist`) to App
    2. Pass relevant state value (i.e. `playlistTracklist`) to both components
    3. Pass state value 'setter' function (i.e. `setPlaylistTracklist`) to `SearchResults`
    4. Add some kind of button to the track in search results
        - Pass search results down from

Process
1. Create set of search results (basically pull trackDummy into search results)
2. Replace the contents of playlistTracklist with an empty list
3. Display the search results
4. Add button to search results for adding in song


# 4. Savings playlist to user's account

Tasks
- [x] Add `uri` to the track object
- [x] Create save button that triggers some event to 
    - [x] Send the uris of the tracks in the playlist to Spotify
    - [x] Clear the existing state of the playlist

# 5. Spotify API access

Thinking
- Where should this token work be happening?  IMO this should all be contained within the Playlist, so we import the module into the playlist and have the playlist control the state of the token
- What does the module consist of
    - input w/ label that has 
    - handleTokenChange function (onChange)

Tasks
1. Create module file/folder and successfuly import module so that it executes some task from within the playlist component (e.g. alert)
2. Add in changeHandler Function to the `Playlist` component