import React from 'react';
import { useSelector } from 'react-redux';

const Tasks = () => {
    const todos = useSelector((state) => state);

  return (
    <div className='tasks-container'>
        <ul>
            {console.log(todos)}
            <li>Task 1</li>
            <li>Task 2</li>
        </ul>
    </div>
  )
}

export default Tasks