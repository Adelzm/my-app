import React from 'react'
import { TodoModel } from '../models/TodoModel'
import './styles.css';
import { TodoCard } from './TodoCard';


interface Props {
    todos: TodoModel[];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TodoList = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
        {todos.map((todo) => (
            <TodoCard
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}/>
        ))}
    </div>
  )
}
