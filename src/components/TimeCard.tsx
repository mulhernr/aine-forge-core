import { useState, useEffect } from 'react'
import './TimeCard.css'

function TimeCard() {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      setTime(timeString)
      setDate(dateString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="time-card">
      <h3>🕐 Time</h3>
      <p className="time-display">{time}</p>
      <p className="date-display">{date}</p>
    </div>
  )
}

export default TimeCard
