import React from 'react'
import BrainStormGoal from './BrainStormGoal'

function Goals() {

    const goals = [

        { 
            wish: "this is wish number 1",
            children: [
                { 
                    wish: "this is wish number 1",
                    children: []
                },
                { 
                    wish: "this is wish number 2",
                    children: []
                },
                { 
                    wish: "this is wish number 3",
                    children: []
                },
                { 
                    wish: "this is wish number 4",
                    children: []
                },
                { 
                    wish: "this is wish number 5",
                    children: []
                },
                { 
                    wish: "this is wish number 6",
                    children: []
                }
            ]
        },
        { 
            wish: "this is wish number 2",
            children: []
        },
        { 
            wish: "this is wish number 3",
            children: []
        },
        { 
            wish: "this is wish number 4",
            children: []
        },
        { 
            wish: "this is wish number 5",
            children: []
        },
        { 
            wish: "this is wish number 6",
            children: []
        }
    ]

    const brainStormGoals = goals.map(goal => <BrainStormGoal goal={goal} />);

    return (
        <div>
            {brainStormGoals}
        </div>
    )
}

export default Goals

