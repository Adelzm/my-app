import React from 'react'
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}: Props) => {
  return (
    <form className='input'>
        <input type='input' 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Exter a tasks' 
        className='input_box'/>
        <button type='submit' className='input_submit'>Go</button>
    </form>
  )
}

export default InputField