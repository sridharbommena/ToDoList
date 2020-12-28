import React from 'react'
import {v4} from "uuid" ;
import "./formGroup.css";


function FormGroup({setTodo}) {

    const todoRef = React.createRef();

    const handleAdd =() =>
    {
        const task = todoRef.current.value.trim();
        if(task !== "")
        setTodo( prev =>
            [
                {
                _id : v4(),
                task,
                completed : false
                },
                ...prev 
                
            ]);

        else
        {
            alert("Enter A ToDo");
        }
        todoRef.current.value = "";


    }


    

    return (
        <div className="form-group">
            <label><b>Add a Todo:</b></label>
            <div className="d-flex flex-row justify-content-around">
                <input ref={todoRef} type="text"
                id="input"
                className="form-control" />
                <button id="input" className="btn btn-secondary" onClick={()=>handleAdd()} >
                    Add
                </button>
            </div>
       </div>
    )
}

export default FormGroup;
