import { useState, useEffect } from 'react'
import Header from '../components/Header'
import LocationCard from '../components/LocationCard'
import TimeCard from '../components/TimeCard'
import WeatherCard from '../components/WeatherCard'
import TodoList from '../components/TodoList'
import QuoteCard from '../components/QuoteCard'
import './Dashboard.css'

function Dashboard() {
  const [location, setLocation] = useState<{ city: string; country: string } | null>(null)
  const [weather, setWeather] = useState<{ temp: number; condition: string; icon: string } | null>(null)
  const [todos, setTodos] = useState<Array<{ id: number; text: string; completed: boolean }>([
    { id: 1, text: 'Review project requirements', completed: false },
    { id: 2, text: 'Write unit tests', completed: true },
    { id: 3, text: 'Update documentation', completed: false },
  ])

  // Simulate fetching location data
  useEffect(() => {
    // In a real app, this would use geolocation API
    setLocation({ city: 'San Francisco', country: 'USA' })
  }, [])

  // Simulate fetching weather data
  useEffect(() => {
    // In a real app, this would call a weather API
    const weatherData = [
      { temp: 72, condition: 'Sunny', icon: '☀️' },
      { temp: 68, condition: 'Cloudy', icon: '☁️' },
      { temp: 65, condition: 'Rainy', icon: '🌧️' },
      { temp: 75, condition: 'Clear', icon: '🌙' },
    ]
    setWeather(weatherData[Math.floor(Math.random() * weatherData.length)])
  }, [])

  const addTodo = (text: string) => {
    const newTodo = {
      id: Math.max(...todos.map(t => t.id), 0) + 1,
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Header 
        title="Personal Dashboard" 
        subtitle="Your daily overview at a glance"
      />
      
      <main className="dashboard-main">
        <div className="dashboard-grid">
          <div className="dashboard-card location-card-wrapper">
            {location && <LocationCard city={location.city} country={location.country} />}
          </div>

          <div className="dashboard-card time-card-wrapper">
            <TimeCard />
          </div>

          <div className="dashboard-card weather-card-wrapper">
            {weather && <WeatherCard temp={weather.temp} condition={weather.condition} icon={weather.icon} />}
          </div>

          <div className="dashboard-card quote-card-wrapper">
            <QuoteCard 
              text="Life is what happens when you're busy making other plans. Make the most of every moment and live life to the fullest." 
              author="John Lennon"
            />
          </div>

          <div className="dashboard-card todo-card-wrapper">
            <TodoList 
              todos={todos} 
              onAdd={addTodo} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
