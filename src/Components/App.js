import React,{useState} from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
    const [inputText,setInputText]=useState('');
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