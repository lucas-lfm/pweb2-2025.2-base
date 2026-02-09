import { NavLink } from 'react-router';
import './menu.css';

export default function Menu() {
  return (
    <ul className='menu'>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/sobre'>Sobre</NavLink>
      </li>
      <li>
        <NavLink to='/contato'>Contato</NavLink>
      </li>
    </ul>
  );
}