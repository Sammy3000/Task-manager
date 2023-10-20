import React from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className='App'>
    <header>
        My task manager
    </header>
    <Form/>
    <TodoList/>
    </div>
  )
}

export default App