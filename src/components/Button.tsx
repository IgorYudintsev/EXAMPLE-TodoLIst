import React from 'react';
type PropsType = {
    callBack: () => void
}

export const Button =React.memo(
    (props: PropsType) => {
        const callBackHandler = () => {
            props.callBack()
        }

        return (
            <button onClick={callBackHandler}>X</button>
        )
    }
)