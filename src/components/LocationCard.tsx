interface LocationCardProps {
  city: string
  country: string
}

function LocationCard({ city, country }: LocationCardProps) {
  return (
    <div className="location-card">
      <h3>📍 Location</h3>
      <p className="location-city">{city}</p>
      <p className="location-country">{country}</p>
    </div>
  )
}

export default LocationCard
