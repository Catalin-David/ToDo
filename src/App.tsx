import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from '../src/todo.model'

const App: React.FC = () =>{
  const [todos, setTodos] = useState<Todo[]>([]);
  const [index, setIndex] = useState<number>(0);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
        ...prevTodos,
        { id : `id${index}` , text: text}
      ]
    )
    setIndex(index => index+1)
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
