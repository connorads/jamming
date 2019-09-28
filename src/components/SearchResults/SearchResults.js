import React from 'react'
import './SearchResults.css'
import Track from '../Track/Track'

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <div className="TrackList">
            {
                props.tracks.map(track => {
                    return(<Track
                        key={track.id}
                        track={track}
                        trackActionCharacter="+"
                        handleTrackAction={props.addTrackToPlaylist}/>)
                })
            }
            </div>
        </div>
    )
}

export default SearchResults;