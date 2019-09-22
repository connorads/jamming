import React from 'react'
import './SearchResults.css'
import Track from '../Track/Track'

function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <div className="TrackList">
            {
                props.results.map(track => {
                    return(<Track key={track.id}
                        title={track.title}
                        artist={track.artist}
                        album={track.album} />)
                })
            }
            </div>
        </div>
    )
}

export default SearchResults;