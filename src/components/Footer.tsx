import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <p className="footer-copyright">&copy; {currentYear} Aine Forge. All rights reserved.</p>
    </footer>
  )
}

export default Footer
