import { configureStore } from '@reduxjs/toolkit'
import todo from '../features/todo.slice'

export default configureStore({
    reducer: {
        todo
    }
})