import React from 'react'
import BrainStormGoal from './BrainStormGoal'

function Goals() {

    const goals = [

        { 
            id: 1,
            wish: "this is wish number 1",
            children: [
                { 
                    id: 10,
                    wish: "this is wish number 1",
                    children: []
                },
                { 
                    id: 21,
                    wish: "this is wish number 2",
                    children: []
                },
                { 
                    id: 13,
                    wish: "this is wish number 3",
                    children: []
                },
                { 
                    id: 14,
                    wish: "this is wish number 4",
                    children: []
                },
                { 
                    id: 15,
                    wish: "this is wish number 5",
                    children: []
                },
                { 
                    id: 16,
                    wish: "this is wish number 6",
                    children: []
                }
            ]
        },
        { 
            id: 100,
            wish: "this is wish number 1",
            children: []
        },
        { 
            id: 2,
            wish: "this is wish number 2",
            children: []
        },
        { 
            id: 3,
            wish: "this is wish number 3",
            children: []
        },
        { 
            id: 4,
            wish: "this is wish number 4",
            children: []
        },
        { 
            id: 5,
            wish: "this is wish number 5",
            children: []
        },
        { 
            id: 6,
            wish: "this is wish number 6",
            children: []
        }
    ]

    const brainStormGoals = goals.map(goal => <BrainStormGoal key={goal.id} goal={goal} />);

    return (
        <div>
            {brainStormGoals}
        </div>
    )
}

export default Goals

