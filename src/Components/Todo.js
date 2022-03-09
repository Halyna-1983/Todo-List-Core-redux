import React, { useState } from 'react';
import InputField from './InputField';
import { RoundBtn } from '../StyledComponent/RoundBtn.style';
import { TodoContainer } from '../StyledComponent/TodoContainer.style';
import { DescriptionContainer } from '../StyledComponent/DescriptionContainer.style';
import { ReactComponent as Close } from '../icons/close.svg';
import { ReactComponent as Edit} from '../icons/edit.svg';


function Todo({ todos, editTodo, removeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    // const submitEdit = value => { 
    //     editTodo(edit.id, value)
    //     setEdit({
    //         id: null,
    //         value: ''
    //     })
    // }

    // if (edit.id) { 
    //     return <InputField edit={edit} onSubmit={ submitEdit} />
    // }

  return (
      todos.map((todo, index) => (
        <TodoContainer>

            <DescriptionContainer key={todo.id}>
               {todo.text}
            </DescriptionContainer>

            {/* <RoundBtn
                  onClick={() => editTodo({ id: todo.id, value: todo.text })}>
                  <Edit/>
            </RoundBtn> */}

            <RoundBtn
                  onClick={() => removeTodo(todo.id)}>
                  <Close/>
            </RoundBtn>
             
        </TodoContainer>
          ))
  )
}

export default Todo;