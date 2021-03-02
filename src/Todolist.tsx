import React, {useCallback} from 'react';
import {Button} from "./components/Button";
import {store} from "./redux/store";
import {CheckBox} from "./components/CheckBox";
import {Input} from "./components/Input";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    deleteTask: (mId: string) => void
    addTask: (value: string) => void
    changeStatus: (mId: string) => void
    filterTask: (value: string) => void
    filter: string
}

export const Todolist = React.memo((props: PropsType) => {
    let deleteTaskHandler = useCallback((mId: string) => {
        props.deleteTask(mId)
    }, [props.deleteTask])

    let filterTaskHandler = useCallback((value: string) => {
        props.filterTask(value)
    }, [props.filterTask])

    let filteredTasks = store.getState().tasks;
    if (props.filter === "Active") {
        filteredTasks = store.getState().tasks.filter(t => t.isDone === false);
    }
    if (props.filter === "Completed") {
        filteredTasks = store.getState().tasks.filter(t => t.isDone === true);
    }
    let addTaskHandler =useCallback((value:string) => {
        props.addTask(value)
    },[props.addTask])
    return <div>
        <h3>{props.title}</h3>
        <Input callBack={addTaskHandler} value={'+'}/>
        <ul>
            {
                filteredTasks.map(m => {
                        return (
                            <div>
                                <li key={m.id}>
                                    <Button callBack={() => deleteTaskHandler(m.id)} value={'X'} filter={props.filter}/>
                                    <CheckBox checked={m.isDone} callBack={() => props.changeStatus(m.id)}/>
                                    <span>{m.title}</span>
                                </li>
                            </div>
                        )
                    }
                )}
        </ul>
        <Button callBack={() => filterTaskHandler('All')} value={'All'} filter={props.filter}/>
        <Button callBack={() => filterTaskHandler('Active')} value={'Active'}  filter={props.filter}/>
        <Button callBack={() => filterTaskHandler('Completed')} value={'Completed'}  filter={props.filter}/>
    </div>
})


