import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Omar.
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          À propos
        </NavLink>
        <NavLink to="/competance" className={({ isActive }) => isActive ? 'active' : ''}>
          Compétences
        </NavLink>
        <NavLink to="/formation" className={({ isActive }) => isActive ? 'active' : ''}>
          Formation
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
          Projets
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;