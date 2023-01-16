import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
    name: 'todo',
    initialState: [
        {
            id: '1',
            taskName: 'Task 1',
            done: true
        },
        {
            id: '2',
            taskName: 'Task 2',
            done: false
        }
    ],
    reducers: {
        addTask() {

        },
        deleteTask() {

        },
        updateStatus() {

        }
    }
});

export default todo.reducer;