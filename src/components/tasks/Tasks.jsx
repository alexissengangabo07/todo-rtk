import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateStatus } from '../../features/todo.slice';

const Tasks = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(deleteTask(id));
  }

const changeStatus = (id) => {
  dispatch(updateStatus(id));
}

  return (
    <div className='tasks-container'>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id} className={todo.done ? 'task-done' : ''}>
              <span>{todo.title}</span>
              <input type="checkbox" onChange={() => changeStatus(todo.id)} name="done" id="done" checked={todo.done} />
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Tasks