import { useSelector } from 'react-redux';

const Tasks = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div className='tasks-container'>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Tasks