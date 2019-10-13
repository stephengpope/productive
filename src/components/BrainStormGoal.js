import React from 'react'

function BrainStormGoal({goal}) {

    const brainStormGoals = goal.children.map(goal => <BrainStormGoal key={goal.id} goal={goal} />);

    return (
        <div>
            <div className="Goal">
                { goal.completed ? <input type="checkbox" checked="checked" /> : <input type="checkbox" /> }
                <div><input type="text" defaultValue={goal.wish} /></div>
                
            </div>
            <div className="GoalChildren">{ brainStormGoals }</div>
        </div>
    )
}

export default BrainStormGoal
