import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="navbar navbar-dark bg-dark">
      <nav className="container">
        <div className="logo">
          <img
            src="/images/logo.png"
            alt="Logo WebCraft Solutions"
          />
          <h1 className="text-white">WebCraft Solutions</h1>
        </div>

        <ul className="nav">
          <li><NavLink to="/" className="nav-link">Accueil</NavLink></li>
          <li><NavLink to="/inscription" className="nav-link">Inscription</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header