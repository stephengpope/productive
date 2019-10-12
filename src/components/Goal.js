import React from 'react'

function Goal({goal}) {
    return (
        <div>
                <input type="checkbox" />
                <div>{goal.wish}</div>
            </div>
    )
}

export default Goal
