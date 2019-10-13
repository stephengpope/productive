import React from 'react'
import Goal from './Goal'

function TodaysGoalList() {

    const todaysGoals = [
        {
            id: 1,
            completed: false,
            wish: "Go to the store"
        },
        {   
            id: 2,
            completed: false,
            wish: "finish todo app"
        },
        {
            id: 3,
            completed: true,
            wish: "take new picture of madison and avery"
        }
    ];

    const goalListTodo = todaysGoals.filter(goal => !goal.completed).map(goal => <Goal goal={goal} />);
    const goalListDone = todaysGoals.filter(goal => goal.completed).map(goal => <Goal goal={goal} />);

    return <div><h2>Todo:</h2>{goalListTodo}<h2>Done</h2>{goalListDone}</div>;
}

export default TodaysGoalList
