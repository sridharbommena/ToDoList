import React from 'react'
import "./todoItem.css";
import { AiOutlineDelete } from "react-icons/ai";

function TodoItem({todoItem , list , id , setTodo }) {
    const handleClick = ()=>
    {
        list = list.filter( item => item._id !== id);
        todoItem.completed = !todoItem.completed ;
        console.log(list);

        setTodo(list);
        
        !todoItem.completed ?
        setTodo( prev => [
            todoItem ,
            ...prev 
            
        ])
        :
        setTodo( prev => [
            ...prev ,
            todoItem
            
        ]);
    
        console.log(list);

    }

    const handleDelete = () =>
    {
        list = list.filter(item => item._id !== id);

        setTodo(list);
    }
    return (
        <div id="container">
        <div>
        <input type="checkbox" id="checkbox" checked={todoItem.completed}  onChange={()=>handleClick()} />
        { 
            todoItem.completed ?
            <label id="todoItemStriked">{todoItem.task}</label>
            :
            <label id="todoItem">{todoItem.task}</label>
        }
        </div>

        <div>
        <button type="button" onClick={()=>handleDelete()} className="btn btn-default btn-sm">
          <AiOutlineDelete color="red" size={20}/>
        </button>
        </div>

        </div>
    )
}

export default TodoItem
