import React from 'react';

const Dashboard = (props) => {
    return (
            // HERE, CALL HANDLER FUNCTIONS IN APP
        <div className="dashboard-div">
            <button
            onClick={props.balls}
            className="button"
            >
            BALL
            </button>

            <button
            className="button"
            onClick={props.strikes}
            >
                STRIKE
            </button>

            <button
            onClick={props.fouls}
            className="button"
            >
            FOUL
            </button>

            <button
            onClick={props.hit}
            className="button"
>
            HIT
            </button>
        </div>
    )
}

export default Dashboard;