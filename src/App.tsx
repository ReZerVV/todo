import React, { useState } from 'react';
import './App.css'
import { Item } from './components/Item';

function App() {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState<string[] | []>([])

    let AddTodo = () => {
        setTodoList([...todoList, todo]);
    }
    return (
        <section className='todo'>
            <div>
                <div className='todo-action'>
                    <input className='todo-action-input'
                           type='text'
                           onChange={e => setTodo(e.target.value)}
                           value={todo}/>
                    <button onClick={AddTodo}
                            className='todo-action-add'>Add</button>
                </div>
            </div>
            <div className='todo-list'>
                { todoList.map(i => <Item description={i}/>) }
            </div>
        </section>
    );
}

export default App;
