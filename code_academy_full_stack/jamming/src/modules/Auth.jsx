import React, {useState, useEffect } from "react";

// Documents
// 1. Set Spotify related inputs
const REDIRECT_URI = "http://127.0.0.1:5173/callback"; // Change to your app's URL
const AUTH_ENDPOINT = new URL("https://accounts.spotify.com/authorize");
const SCOPES = "playlist-modify-public playlist-modify-private";
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
// 2. Create cryptographic infrastructure
// ORDERING: 
//  2.a. Generate random string (generateCodeVerifier)
//  2.b. Hash it (sha256 - async)
//  2.c. base64encode the  (generateCodeVerifier)
//  2.d. Wrapper (generateCode Verifier - asynch)
function generateCodeVerifier(length=128) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = window.crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "")
}

async function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
}
function base64encode(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    let base64 = window.btoa(binary);
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function generateCodeChallenge(codeVerifier) {
    const hashed = await sha256(codeVerifier)
    const base64url = base64encode(hashed)
    return base64url;
}
// 6. Create helper function to determine whether the function is expired
function isSpotifyTokenExpired() {
    const expiresAt = localStorage.getItem('spotifyAccessTokenExpiresAt');
    if (!expiresAt) return true;
    return Date.now() > Number(expiresAt);
}

function SpotifyAuth() {

    useEffect(() => {
        if (isSpotifyTokenExpired()) {
            localStorage.removeItem('spotifyAccessToken');
            localStorage.removeItem('spotifyAccessTokenExpiresAt');
            alert('Token expired.  Please re-authenticate into Spotify.')
        } else {
            window.history.replaceState({}, document.title, REDIRECT_URI);
        }
    }, [])

    // 3. Write handleLogin function that pulls in url code
    async function handleLogin() {
        // Create random string (aka code verifier)
        const verifier = generateCodeVerifier();
        localStorage.setItem('spotifyCodeVerifier', verifier)
        // Geneate code challenge
        const codeChallenge = await generateCodeChallenge(verifier);
        // Conduct get request to authenticate
        const params = {
            response_type: 'code',
            client_id: CLIENT_ID,
            SCOPES,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: REDIRECT_URI,
        }
        AUTH_ENDPOINT.search = new URLSearchParams(params).toString();
        window.location.href = AUTH_ENDPOINT.toString();
    }

    // 4. Write getToken function that pulls in urlcode
    async function getToken(code) {
        const url = "https://accounts.spotify.com/api/token";
        const codeVerifier = localStorage.getItem('spotifyCodeVerifier')
        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: CLIENT_ID,
                grant_type: 'authorization_code',
                code,
                redirect_uri: REDIRECT_URI,
                code_verifier: codeVerifier,
            }),
        }

        const body = await fetch(url, payload);
        const response = await body.json();

        if (response.access_token) {
            localStorage.setItem('spotifyAccessToken', response.access_token)
            // Calculate expiration timestap
            const expiresAt = Date.now() + response.expires_in * 1000;
            localStorage.setItem('spotifyAccessTokenExpiresAt', expiresAt);
            // Clear URL
            window.history.replaceState({}, document.title, REDIRECT_URI);
        }
    }

    // 5. Implement useEffect to pull in code and fetch token
    useEffect(() => {
        // Store the returned code contained in the callback url
        const urlParams = new URLSearchParams(window.location.search)
        let code = urlParams.get('code')
        if (code && !localStorage.getItem('spotifyAccessToken')) {
            getToken(code)
        } 
    });

    const isLoggedIn = localStorage.getItem('spotifyAccessToken') && !isSpotifyTokenExpired();

    return (
        <div>
            {!isLoggedIn ? (
                <button onClick={handleLogin}>Login with Spotify</button>
            ) : (
                <div>
                    <p style={{margin: 0}}>Logged in!  Access token stored.</p>
                </div>
            )}
        </div>
    )
}

export default SpotifyAuth;