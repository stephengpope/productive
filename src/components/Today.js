import React, { component } from 'react'
import TodaysGoalList from './TodaysGoalList'

const Today = () => {

    return <div className="Today">
        <h1>Today</h1>

        <TodaysGoalList />
    </div>;
}

export default Today;