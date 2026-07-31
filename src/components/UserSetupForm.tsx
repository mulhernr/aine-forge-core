import { useState } from 'react'
import './UserSetupForm.css'

interface UserSetupFormProps {
  onSubmit: (userData: UserData) => void
}

export interface UserData {
  name: string
  city: string
  country: string
}

function UserSetupForm({ onSubmit }: UserSetupFormProps) {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    city: '',
    country: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <form className="user-setup-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          aria-label="Your Name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className="error-message">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
          aria-label="City"
          aria-invalid={!!errors.city}
          aria-describedby={errors.city ? 'city-error' : undefined}
        />
        {errors.city && (
          <span id="city-error" className="error-message">
            {errors.city}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter your country"
          aria-label="Country"
          aria-invalid={!!errors.country}
          aria-describedby={errors.country ? 'country-error' : undefined}
        />
        {errors.country && (
          <span id="country-error" className="error-message">
            {errors.country}
          </span>
        )}
      </div>

      <button type="submit" className="submit-button" aria-label="Complete Setup">
        Complete Setup
      </button>
    </form>
  )
}

export default UserSetupForm
