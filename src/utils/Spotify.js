class Spotify {
    static async search(searchTerm, token) {
        const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`
        const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
        const jsonResponse = await response.json(); //?
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
}

export default Spotify;
