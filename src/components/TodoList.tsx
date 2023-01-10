import React from 'react'
import { TodoModel } from '../models/TodoModel'
import './styles.css';


interface Props {
    todos: TodoModel[];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
        {todos.map((todo) => (
            <li>{todo.text}</li>
        ))}
    </div>
  )
}
