import React, { useState } from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

class Task {
    constructor(
        public id: number,
        public title: string,
        public status: boolean = false
    ) { }
}



function App() {
    const [todo, setTodo] = useState<string>('');
    const [tasks, setTasks] = useState<Task[] | []>([
        new Task(0, 'test'),
        new Task(1, 'test2', true),
    ]);

    let AddTask = () => {
        setTasks([...tasks, new Task(tasks.length, todo)])
        setTodo('');
    }
    let DoneTask = (id: number) => {
        tasks.forEach((task) => {
            if (task.id == id) {
                task.status = true;
            }
        });
        setTasks([...tasks]);
    }
    let DeleteTask = (id: number) => {
        setTasks([...tasks.filter((task) => task.id != id)]);
    }

    return (
        <section className='todo'>
            <div className='todo-action'>
                <input type='text'
                       className='todo-action-input'
                       onChange={e => setTodo(e.target.value)}
                       value={todo}/>
                <button className='todo-action-newtask'
                        onClick={AddTask}>New Task</button>
            </div>
            <div className='todo-list'>
                {tasks && tasks.length ? '' : <p className='message'>No Tasks...</p>}
                {tasks && tasks.map((task, index) => {
                    return (
                        <React.Fragment>
                            <div className='task-bg'>
                                <div className={task.status ? 'task__done' : 'task'}>
                                    <span className='task-id'>{index}</span>
                                    <span className='task-title'>{task.title}</span>
                                </div>
                                <div className='task-action'>
                                    { task.status ? '' : 
                                    <span title='done'
                                          onClick={() => DoneTask(task.id)}><FontAwesomeIcon icon={faCheck} /></span> }
                                    <span title='delete'
                                          onClick={() => DeleteTask(task.id)}><FontAwesomeIcon icon={faXmark} /></span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    );
}

export default App;
