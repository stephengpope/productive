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

    const goalListTodo = todaysGoals.filter(goal => !goal.completed).map(goal => <Goal goal={goal} />);
    const goalListDone = todaysGoals.filter(goal => goal.completed).map(goal => <Goal goal={goal} />);

    return <div><h2>Todo:</h2>{goalListTodo}<h2>Done</h2>{goalListDone}</div>;
}

export default TodaysGoalList
