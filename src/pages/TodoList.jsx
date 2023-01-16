import React from 'react'
import Form from '../components/form/Form'
import Header from '../components/header/Header'
import Tasks from '../components/tasks/Tasks'

const TodoList = () => {
  return (
    <>
        <Header />
        <Form />
        <Tasks />
    </>
  )
}

export default TodoList