import React, {useCallback} from 'react';
import {Button} from "./components/Button";
import {store} from "./redux/store";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    // tasks: Array<TaskType>
    deleteTask: (mId: number) => void
}

export const Todolist=React.memo((props: PropsType) =>{
    let deleteTaskHandler=useCallback((mId:number)=>{
        props.deleteTask(mId)
    },[props.deleteTask])
    return <div>
        <h3>{props.title}</h3>
        <ul>
            {store.getState().tasks.map(m => {
                    return (
                        <li key={m.id}>
                            <Button callBack={() => deleteTaskHandler(m.id)}/>
                            <input type="checkbox" checked={m.isDone}/>
                            <span>{m.title}</span>
                        </li>
                    )
                }
            )}
        </ul>
    </div>
})

