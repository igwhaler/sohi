import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              {...todo}
              onClick={() => onTodoClick(index)}>
            </Todo>
          )
        })
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
