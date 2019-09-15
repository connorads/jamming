import React from 'react'
import './SearchResults.css'
import Track from '../Track/Track'

function SearchResults() {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <div className="TrackList">
                <Track key="1"
                    title="Class of Deja (feat. D Double E &amp; Ghetts)"
                    artist="Kano, D Double E, Ghetts"
                    album="Hoodies All Summer" />
                <Track key="2"
                    title="Cellophane"
                    artist="FKA twigs"
                    album="Cellophane - Single" />
            </div>
        </div>
    )
}

export default SearchResults;