import React from 'react'
import Goal from './Goal'

function TodaysGoalList() {

    const todaysGoals = [
        {
            completed: false,
            wish: "Go to the store"
        },
        {   
            completed: false,
            wish: "finish todo app"
        },
        {
            completed: true,
            wish: "take new picture of madison and avery"
        }
    ];

    const goalList = todaysGoals.map(goal => <Goal goal={goal} />);

    return <div>{goalList}</div>;
}

export default TodaysGoalList
