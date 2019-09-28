/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Track.css'

function Track(props) {
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.title}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <a className="Track-action" 
            onClick={() => props.handleTrackAction(props.track)}>
                {props.trackActionCharacter}
            </a>
        </div>
    )
}

export default Track;