import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
    name: 'todo',
    initialState: [
        {
            id: '1',
            title: 'Task 1',
            done: true
        },
        {
            id: '2',
            title: 'Task 2',
            done: false
        },
        {
            id: '3',
            title: 'Task 3',
            done: false
        }
    ],
    reducers: {
        addTask(state, action) {
            const newTask = {
                id: new Date().getTime(),
                title: action.payload,
                done: false
            };

            state.push(newTask);
        },
        deleteTask(state, action) {
            return state.filter(task => task.id !== action.payload);
        },
        updateStatus(state, action) {
            const index = state.findIndex(item => item.id === action.payload);
            state[index].done = !state[index].done;
            return state;
        }
    }
});

export const { addTask, deleteTask, updateStatus } = todo.actions;
export default todo.reducer;