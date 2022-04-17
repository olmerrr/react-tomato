import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <Link to='/' className='brand-logo'>
          Tomato
        </Link>

        <ul id='nav-mobile' className='right hide-on-med-and-down nav-links'>
          <li>
            <Link to='https://en.wikipedia.org/wiki/Gift'>About</Link>
          </li>
          <li>
            <Link to='https://en.wikipedia.org/wiki/Store'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
