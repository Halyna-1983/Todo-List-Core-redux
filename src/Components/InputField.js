import React, { useState} from 'react';
import { Button } from '../StyledComponent/Button.style';
import { Input } from '../StyledComponent/Input.style';

const InputField = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }

    const handleChange = e => { 
        setInput(e.target.value)
    }

    return (
        <form onSubmit={ handleSubmit}>
        <Input
            type="text"
            placeholder='write new task'
            value={input}
            name="text"
            onChange={handleChange}
        />
        <Button>Add task</Button>
    </form>
  )
}

export default InputField;