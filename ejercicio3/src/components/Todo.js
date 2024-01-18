
import '../styles/Todo.css';
import React, { useState } from 'react';
import Agregar from './Agregar.js'

function Todo(){
    const [todos, setTodos]=useState([])
    const [newValue, setNewValue]=useState('')
    
    const change = (e) => {
        setNewValue(e.target.value);
    };
    const handleSubmit = () => {
        setTodos([...todos, newValue]);
        setNewValue('');
    };
    const handleDelete= (index)=>{
        const todosNew=[...todos];
        todosNew.splice(index,1)
        setTodos(todosNew);
    }
    return (
        <div className="list-container">
            <Agregar newValue={newValue} change={change} handleSubmit={handleSubmit}/>
            <ul>
                {todos.map((todo,index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>X</button>
                    </li>  
                ))}
            </ul>
        </div>
    );
}

export default Todo;