import React from 'react';


const Display = (props) => {
    return (
        <div>
        {/* HERE, DISPLAY SCORE PROPS FROM APP */}
        <div>
            BALLS: {props.ballCount}
        </div>

        <div>
            STRIKES: {props.strikeCount}
        </div>
    </div>
    )
}

export default Display;