import React, { useState } from 'react';
import InputField from './InputField';
import Todo from './Todo';
import { NewTodoContainer } from '../StyledComponent/NewTodoContainer.style';

function List() {
    const [todos, setTodos] = useState([]);


    const addTodo = todo => { 
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

    // const editTodo = (todoId, newValue) => { 
    //     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    // }

    const removeTodo = id => { 
        const removeData = [...todos].filter(todo => todo.id !== id)
        setTodos(removeData)
    }

    return (
        <>
        <NewTodoContainer>
            <InputField onSubmit={addTodo} />
        </NewTodoContainer>
            
            <Todo
                todos={todos}
                // editTodo={ editTodo}
                removeTodo={removeTodo} />
        </>
  )
}

export default List;