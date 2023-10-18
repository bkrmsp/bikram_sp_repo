import React from 'react';


const Todo = ({ todo }) => {
    const h1Ele = <h1>{todo.text}</h1>
    const strikeEle = <strike>{h1Ele}</strike>
    const text = todo.isCompleted ? <strike>{h1Ele}</strike> : h1Ele;
    return (
        <div data-testid={`todo-${ todo.id }`}>
            {text}
        </div>
    )
}

export default Todo;