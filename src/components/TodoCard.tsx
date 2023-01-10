import React from 'react'
import { TodoModel } from '../models/TodoModel';
import { MdDone, MdDelete, MdModeEdit } from 'react-icons/md'

interface Props {
    todo: TodoModel;
    todos: TodoModel[];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TodoCard = ({todo, todos, setTodos} : Props) => {
  return (
    <form className='todo_card'>
        <span className='todo_card--text'>{todo.text}</span>
        <div>
            <span className='todo_card--icon'> <MdModeEdit/> </span>
            <span className='todo_card--icon'> <MdDelete/> </span>
            <span className='todo_card--icon'> <MdDone/> </span>
        </div>
    </form>
  )
}
