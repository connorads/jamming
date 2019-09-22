/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Track.css'

function Track(props) {
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.title}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            <a className="Track-action">+</a>
        </div>
    )
}

export default Track;