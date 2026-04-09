import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="nav-brand" style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px', textTransform: 'uppercase', color: 'inherit' }}>
          Ketaki Patil
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Home
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Experience
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Projects
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Education & Skills
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
