import React from 'react'
import './GameGenre.css';

function GameGenre({ genre }) {
    return (
        <span className='game-genre'>
            {genre}
        </span>
    )
}

export default GameGenre;
