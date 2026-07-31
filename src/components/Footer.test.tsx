import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the footer element', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('renders copyright text with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    const copyrightText = `© ${currentYear} Aine Forge. All rights reserved.`
    expect(screen.getByText(copyrightText)).toBeInTheDocument()
  })

  it('renders copyright paragraph with correct class', () => {
    render(<Footer />)
    const copyrightParagraph = screen.getByText(/Aine Forge/).closest('p')
    expect(copyrightParagraph).toHaveClass('footer-copyright')
  })
})
