import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import UserSetupForm, { UserData } from './UserSetupForm'

describe('UserSetupForm', () => {
  it('renders form with all input fields', () => {
    const mockSubmit = vi.fn()
    render(<UserSetupForm onSubmit={mockSubmit} />)

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('Country')).toBeInTheDocument()
    expect(screen.getByLabelText('Complete Setup')).toBeInTheDocument()
  })

  it('displays validation errors when submitting empty form', () => {
    const mockSubmit = vi.fn()
    render(<UserSetupForm onSubmit={mockSubmit} />)

    const submitButton = screen.getByLabelText('Complete Setup')
    fireEvent.click(submitButton)

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('City is required')).toBeInTheDocument()
    expect(screen.getByText('Country is required')).toBeInTheDocument()
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('calls onSubmit with form data when form is valid', () => {
    const mockSubmit = vi.fn()
    render(<UserSetupForm onSubmit={mockSubmit} />)

    const nameInput = screen.getByLabelText('Your Name') as HTMLInputElement
    const cityInput = screen.getByLabelText('City') as HTMLInputElement
    const countryInput = screen.getByLabelText('Country') as HTMLInputElement
    const submitButton = screen.getByLabelText('Complete Setup')

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(cityInput, { target: { value: 'San Francisco' } })
    fireEvent.change(countryInput, { target: { value: 'USA' } })
    fireEvent.click(submitButton)

    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      city: 'San Francisco',
      country: 'USA',
    })
  })

  it('clears error message when user starts typing', () => {
    const mockSubmit = vi.fn()
    render(<UserSetupForm onSubmit={mockSubmit} />)

    const submitButton = screen.getByLabelText('Complete Setup')
    fireEvent.click(submitButton)

    expect(screen.getByText('Name is required')).toBeInTheDocument()

    const nameInput = screen.getByLabelText('Your Name')
    fireEvent.change(nameInput, { target: { value: 'J' } })

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('trims whitespace from input values', () => {
    const mockSubmit = vi.fn()
    render(<UserSetupForm onSubmit={mockSubmit} />)

    const nameInput = screen.getByLabelText('Your Name') as HTMLInputElement
    const cityInput = screen.getByLabelText('City') as HTMLInputElement
    const countryInput = screen.getByLabelText('Country') as HTMLInputElement
    const submitButton = screen.getByLabelText('Complete Setup')

    fireEvent.change(nameInput, { target: { value: '  John Doe  ' } })
    fireEvent.change(cityInput, { target: { value: '  San Francisco  ' } })
    fireEvent.change(countryInput, { target: { value: '  USA  ' } })
    fireEvent.click(submitButton)

    expect(mockSubmit).toHaveBeenCalledWith({
      name: '  John Doe  ',
      city: '  San Francisco  ',
      country: '  USA  ',
    })
  })
})
