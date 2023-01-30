import { Link } from 'react-router-dom';
import './nav.module.scss';

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>All Recipes</Link>
        </li>
        <li>
          <Link to='/recipe-book'>Your Own Recipes</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/recipes/new'>New Recipe</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/recipes/:id'>Recipe</Link>
        </li>
        <li>
          <Link to='/dev'>Dev</Link>
        </li>
      </ul>
    </nav>
  );
}
