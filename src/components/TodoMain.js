import React, {useState} from 'react'
import Todo from './Todo';

function TodoMain() {
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] = useState([]);
    const onTaskChange = (event) => {
        setTask(event.target.value)
    }
    const addTask = () => {
        if(task !== ""){
            setTaskArray((prevTasks) => {
                return [...prevTasks, task]
            })
            setTask("")
        }
    }

    const deleteItem = (id) =>{
        console.log(id)
        setTaskArray((prevTasks) => {
            return prevTasks.filter((ele, index) => {
                return index !== id;
            })
        })
    }
  return (
    <div>
        <div>
            <input type='text' value={task} placeholder='Add task' onChange={onTaskChange}/>
            <button onClick={addTask}>Add</button>

        </div>
        <div>
            <ol>
                {taskArray.map((val, index) => {
                   return <Todo id={index} key={index} text={val} onSelect={deleteItem}/>
                })}
            </ol>
        </div>
    </div>
  )
}

export default TodoMain