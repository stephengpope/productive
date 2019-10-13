import React from 'react'

function BrainStormGoal({goal}) {

    const brainStormGoals = goal.children.map(goal => <BrainStormGoal goal={goal} />);

    return (
        <div>
            <div className="Goal">
                { goal.completed ? <input type="checkbox" checked="checked" /> : <input type="checkbox" /> }
                <div><input type="text" value={goal.wish} /></div>
                
            </div>
            <div className="GoalChildren">{ brainStormGoals }</div>
        </div>
    )
}

export default BrainStormGoal
