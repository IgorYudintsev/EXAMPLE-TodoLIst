import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {deleteTaskAC, TasksReducer, filterTaskAC, changeStatusAC, addTaskAC} from "./reducers/TasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";

function App() {

    // let [tasks, dispatchTasks] = useReducer(TasksReducer, [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false}
    // ])
    let [tasks, setTasks] = useState()
    tasks = useSelector<AppStateType, Array<TaskType>>(state => state.tasks);
    let dispatch = useDispatch()

    const deleteTask = (mId: string) => {
        dispatch(deleteTaskAC(mId))
    }

    const addTask=(value:string)=>{
        dispatch(addTaskAC(value))
    }

    const changeStatus = (mId: string) => {
        dispatch(changeStatusAC(mId))
    }

    let [filter, setFilter] = useState('All');
    const filterTask = (value: string) => {
        console.log(value)
        setFilter(value);
        dispatch(filterTaskAC(value))
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                deleteTask={deleteTask}
                addTask={addTask}
                changeStatus={changeStatus}
                filterTask={filterTask}
                filter={filter}
            />
        </div>
    );
}

export default App;
