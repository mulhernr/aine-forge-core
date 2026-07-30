import { useState } from 'react'
import './TodoList.css'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoListProps {
  todos: Todo[]
  onAdd: (text: string) => void
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TodoList({ todos, onAdd, onToggle, onDelete }: TodoListProps) {
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue)
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className="todo-list">
      <h3>✅ To-Do List</h3>
      <p className="todo-progress">{completedCount} of {todos.length} completed</p>

      <div className="todo-input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button onClick={handleAdd} className="todo-add-btn">Add</button>
      </div>

      <ul className="todo-items">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
            <button
              onClick={() => onDelete(todo.id)}
              className="todo-delete-btn"
              aria-label="Delete task"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="todo-empty">No tasks yet. Add one to get started!</p>
      )}
    </div>
  )
}

export default TodoList
