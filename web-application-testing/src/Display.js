import React from 'react';


const Display = (props) => {
    return (
        <div className="display-div">
        {/* HERE, DISPLAY SCORE PROPS FROM APP */}

        {/* <div>
            <img src='../images/phillies.jpg' alt="Philadelphia Phillies logo"/>
        </div> */}

        <div className="scorecard">
            <h2>BALLS</h2>
            <h3>{props.ballCount}</h3>
        </div>

        <div className="outs-scorecard">
            <h4>
            Outs: {props.outsCount}</h4>
        </div>

        <div className="scorecard">
            <h2>STRIKES</h2>
            <h3>{props.strikeCount}</h3>
        </div>
    </div>
    )
}

export default Display;