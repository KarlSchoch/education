import React from "react";

function SpotifyAuth({ onUserTokenChange }) {
    return (
        <div>
            <label>
                User Access Token: <input name="userToken" defaultValue="Paste your Spotify Token" onChange={onUserTokenChange}></input>
            </label>
        </div>
    )
}

export default SpotifyAuth;