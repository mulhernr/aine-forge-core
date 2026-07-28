import { useState } from 'react'
import './Counter.css'

interface CounterProps {
  initialValue?: number
  step?: number
}

function Counter({ initialValue = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount((prev) => prev + step)
  const decrement = () => setCount((prev) => prev - step)
  const reset = () => setCount(initialValue)

  return (
    <div className="counter">
      <div className="counter-display">
        <span className="counter-value" data-testid="counter-value">
          {count}
        </span>
      </div>
      <div className="counter-controls">
        <button 
          onClick={decrement} 
          className="counter-button decrement"
          aria-label="Decrement"
        >
          −
        </button>
        <button 
          onClick={reset} 
          className="counter-button reset"
          aria-label="Reset"
        >
          Reset
        </button>
        <button 
          onClick={increment} 
          className="counter-button increment"
          aria-label="Increment"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
