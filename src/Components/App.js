import React,{useState} from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos]= useState([]);
    const [status, setStatus] =useState('all');
    const [filteredTodos, setFilteredTodos] =useState([]);

    const filterHandler=()=>{
      switch(status){
        case'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true))
        break;
        

         

      }
    }

  return (
    <div className='App'>
    <header>
       <h1>My task manager</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App