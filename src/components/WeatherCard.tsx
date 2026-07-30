interface WeatherCardProps {
  temp: number
  condition: string
  icon: string
}

function WeatherCard({ temp, condition, icon }: WeatherCardProps) {
  return (
    <div className="weather-card">
      <h3>🌤️ Weather</h3>
      <div className="weather-icon">{icon}</div>
      <p className="weather-temp">{temp}°F</p>
      <p className="weather-condition">{condition}</p>
    </div>
  )
}

export default WeatherCard
