import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {deleteTaskAC, TasksReducer} from "./reducers/TasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";

function App() {

    let tasks=useSelector<AppStateType,Array<TaskType>>(state => state.tasks);

    let dispatch=useDispatch()
    // let [tasks, dispatchTasks] = useReducer(TasksReducer, [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false}
    // ])

    const deleteTask = (mId: number) => {
        // let filteredTasks = tasks.filter(f => f.id !== mId);
        // setTasks([...filteredTasks])

        // dispatchTasks(deleteTaskAC(mId))
        dispatch(deleteTaskAC(mId))
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                // tasks={tasks}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
