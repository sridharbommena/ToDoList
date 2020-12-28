import React, { useEffect, useState } from 'react'
import FormGroup from './formGroup'
import TodoList from './TodoList';
import {TODO_KEY} from "./storageAPI_KEY";

function TodoApp() {

    const[ todo, setTodo ] = useState([]);



    useEffect(() => {
        const val = localStorage.getItem(TODO_KEY);
        const todos = JSON.parse(val);
        // console.log(val);
        if(todos)
        setTodo(todos);
    }, [])


    useEffect(()=>
    {
        
        localStorage.setItem(TODO_KEY , JSON.stringify(todo));

    },[todo]);

    return (
        <div className="container">
            <FormGroup setTodo={setTodo} />
            <TodoList list={todo} setTodo={setTodo} />
        </div>
    )
}

export default TodoApp
