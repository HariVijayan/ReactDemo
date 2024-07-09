import React, { useState } from 'react';
import './List.css';

const List = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission

        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue.trim()]);
            setInputValue(''); // Clear input field after adding todo
        }
    }

    const handleDeleteTodo = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h2>To-Do List</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    id="todoinput"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your todo"
                />
                &nbsp;&nbsp;&nbsp;
                <button type="submit" id="tdlbtn">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <h2 key={index}>
                        {todo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => handleDeleteTodo(index)} id="tdlbtn">Delete</button>
                    </h2>
                ))}
            </ul>
        </div>
    );
}

export default List;
