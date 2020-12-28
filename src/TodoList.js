import React from 'react'
import TodoItem from './todoItem'

function TodoList({list , setTodo}) {
    return (
        <div className="form-check ">
            {
                list.map((item)=> <TodoItem key={item._id} id={item._id} list={list} setTodo={setTodo} todoItem={item} />)
            }
        </div>
    )
}

export default TodoList
