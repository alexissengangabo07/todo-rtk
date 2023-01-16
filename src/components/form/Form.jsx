import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/todo.slice';

const Form = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTask(input.trim()));
      setInput('');
    }
  }

  return (
    <div className='form-container'>
      <form action="" onSubmit={e => { e.preventDefault(); addTodo() }}>
        <div>
          <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form