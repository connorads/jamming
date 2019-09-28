/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import './Playlist.css'
import Track from '../Track/Track'

function Playlist(props) {

const [playlistName, setPlaylistName] = useState("New Playlist");

async function handleSave() {
    const trackIds = props.tracks.map(t => t.id)
    props.createSpotifyPlaylist(playlistName, trackIds)
}
    return (
        <div className="Playlist">
            <input onChange={e => setPlaylistName(e.target.value)} placeholder={playlistName} />
            <div className="TrackList">
            {
                props.tracks.map(track => {
                    return(<Track 
                        key={track.id}
                        track={track}
                        trackActionCharacter="-"
                        handleTrackAction={props.removeTrackFromPlaylist} />)
                })
            }
            </div>
            <a className="Playlist-save" onClick={handleSave}>SAVE TO SPOTIFY</a>
        </div>
    )
}

export default Playlist;