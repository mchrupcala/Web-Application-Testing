import React from 'react';


const Display = (props) => {
    return (
        <div className="display-div">
        {/* HERE, DISPLAY SCORE PROPS FROM APP */}
        <div>
            <img src='../phillies.jpg' alt="Philadelphia Phillies logo" />
        </div>

        <div>
            <h2>BALLS</h2>
            <h3>{props.ballCount}</h3>
        </div>

        <div>
            <h2>STRIKES</h2>
            <h3>{props.strikeCount}</h3>
        </div>
    </div>
    )
}

export default Display;