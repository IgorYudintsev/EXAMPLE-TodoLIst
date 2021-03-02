import React from 'react';
import styles from './Button.module.css'

type PropsType = {
    callBack: () => void
    value:string
    filter:string
}

export const Button =React.memo(
    (props: PropsType) => {
        const callBackHandler = () => {
            props.callBack()
        }

        return (
            <button
                className={props.filter===props.value ? styles.activeFilter : ''}
                onClick={callBackHandler}>{props.value}</button>
        )
    }
)