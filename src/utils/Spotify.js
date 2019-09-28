class Spotify {
    static async search(searchTerm, token) {
        const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.tracks.items) {
            return jsonResponse.tracks.items.map(track => {
                return {
                    id: track.id,
                    title: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name
                };
            });
        }
    }
    static async createPlaylist(name, trackIds, token) {
        if (Array.isArray(trackIds) && trackIds.length) {
            const createPlaylistUrl = `https://api.spotify.com/v1/me/playlists`
            const response = await fetch(createPlaylistUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body : JSON.stringify({
                    name: name,
                    public: true
                  })
            });
            const jsonResponse = await response.json();
            const playlistId = jsonResponse.id;
            if (playlistId) {
                const replacePlaylistTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
                await fetch(replacePlaylistTracksUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body : JSON.stringify({uris: trackIds.map(id => "spotify:track:".concat(id))})
                });
            }
        }
    }
}

export default Spotify;