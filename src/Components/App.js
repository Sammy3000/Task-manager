import React,{useState} from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos]= useState([])
  return (
    <div className='App'>
    <header>
       <h1>My task manager{inputText}</h1>
    </header>
    <Form setInputText={setInputText}/>
    <TodoList/>
    </div>
  )
}

export default App