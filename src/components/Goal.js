import React from 'react'

function Goal({goal}) {

    return (
        <div className="Goal">
           { goal.completed ? <input type="checkbox" checked="checked" /> : <input type="checkbox" /> }
            <div><input type="text" value={goal.wish} /></div>
        </div>
    )
}

export default Goal
