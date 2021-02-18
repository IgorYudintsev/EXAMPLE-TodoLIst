import React from 'react';
import {TaskType} from "../Todolist";

let initialState=[
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false}
]

export const TasksReducer = (state=initialState, action: deleteTaskACType) => {
    switch (action.type) {
        case "DELETE-TASKS": {
            console.log('hhhhhhhhh');
            let newState = [...state];
            let filteredTasks = newState.filter(f => f.id !== action.mId);
            return [...filteredTasks]
        }
        default:
            return state
    }

}

type deleteTaskACType={
    type: string,
    mId: number
}

export const deleteTaskAC = (mId: number) => {
    return {
        type: 'DELETE-TASKS',
        mId: mId
    }
}