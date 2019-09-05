import React from 'react';

const Dashboard = (props) => {
    return (
            // HERE, CALL HANDLER FUNCTIONS IN APP
    <div>
    <button
    onClick={props.strikes}
    >
        STRIKE
    </button>

    <button
    onClick={props.balls}
    >
    BALL
    </button>

    <button
    onClick={props.fouls}
    >
    FOUL
    </button>

    <button
    onClick={props.hit}
    >
    HIT
    </button>
</div>
    )
}

export default Dashboard;