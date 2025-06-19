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

# Passing down track information to the track component
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
 `Playlist` -> `Tracklist` -> List of x `Tracks`

 SearchBar -> SearchResults -> 