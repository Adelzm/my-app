import React, { useEffect, useRef, useState } from 'react'
import { TodoModel } from '../models/TodoModel';
import { MdDone, MdDelete, MdModeEdit } from 'react-icons/md'

interface Props {
    todo: TodoModel;
    todos: TodoModel[];
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

export const TodoCard = ({todo, todos, setTodos} : Props) => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(todos.map(
      (todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
    )
  }
  const handleDelete = (id: number) => {
    let index: number = todos.findIndex((todo)=> todo.id === id)
    todos.splice(index, 1);
    setTodos([...todos]);
  }
  const handleEdit = () => {
    if(!todo.isDone) {
      setEditMode(!editMode);
    }
  }

  const handleOnSubmit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodos(todos.map(
      (todo) => todo.id === id ? {...todo, text: editedTodo} : todo)
    )

    setEditMode(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode])

  return (
    <form className='todo_card' onSubmit={(event)=>handleOnSubmit(event, todo.id)}>
      {todo.isDone ?
      (<s className='todo_card--text'>{todo.text}</s>) :
      editMode ?
      (<input 
         className='todo_card--text'
          ref={inputRef}
          value={editedTodo}
          onChange={(event)=> setEditedTodo(event.currentTarget.value)}
      ></input>) :
      (<span className='todo_card--text'>{todo.text}</span>)
      }
        <div>
            <span className='todo_card--icon' onClick={()=>handleEdit()}>
              <MdModeEdit/>
            </span>
            <span className='todo_card--icon' onClick={()=>handleDelete(todo.id)}>
              <MdDelete/>
            </span>
            <span className='todo_card--icon' onClick={()=>handleDone(todo.id)}>
              <MdDone/>
            </span>
        </div>
    </form>
  )
}
