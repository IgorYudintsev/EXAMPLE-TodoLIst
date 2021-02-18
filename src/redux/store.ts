import {combineReducers, createStore} from "redux";
import {TasksReducer} from "../reducers/TasksReducer";

let rootReducer=combineReducers({
    tasks:TasksReducer
})

export let store=createStore(rootReducer)

export type AppStateType=ReturnType<typeof rootReducer>