import React, {useState} from 'react';
import {TaskType} from "../Todolist";
import {v1} from "uuid";

let initialState: Array<TaskType> = [
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false}
]


export const TasksReducer = (state = initialState, action: TasksTypeReducer): Array<TaskType> => {
    switch (action.type) {
        case "DELETE-TASKS": {
            let newState = [...state];
            let filteredTasks = newState.filter(f => f.id !== action.mId);
            return filteredTasks
        }
        case 'ADD-TASK': {
            if (action.value.trim() != '') {
                let newState = [...state];
                let newTask = {id: v1(), title: action.value, isDone: true};
                return [newTask, ...newState];
            }
        }
        case 'CHANGE-STATUS': {
            let newState = [...state];
            let changeTasks = newState.find(f => f.id === action.mId);
            if (changeTasks) {
                changeTasks.isDone = !changeTasks.isDone
            }
            return [...newState]
        }
        case 'FILTER-TASKS': {
            let newState = [...state]
            return newState
        }
        default:
            return state
    }

}
type TasksTypeReducer = {
    type: string,
    mId?: string
    value: string
}
type deleteTaskACType = {
    type: string,
    mId: string
}
type filterTaskACType = {
    type: string,
    value: string
}
type addTaskACType = {
    type: string,
    value: string
}
export const deleteTaskAC = (mId: string): deleteTaskACType => {
    return {
        type: 'DELETE-TASKS',
        mId: mId
    }
}
export const changeStatusAC = (mId: string) => {
    return {
        type: 'CHANGE-STATUS',
        mId: mId
    }
}
export const filterTaskAC = (value: string): filterTaskACType => {
    return {
        type: 'FILTER-TASKS',
        value: value
    }
}

export const addTaskAC = (value: string): addTaskACType => {
    return {
        type: 'ADD-TASK',
        value: value
    }
}
