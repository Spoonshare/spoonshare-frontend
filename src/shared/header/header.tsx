import { Nav } from '../nav/nav';
import { Title } from '../title/title';
import './header.module.scss';

export function Header() {
  return (
    <header>
      <Title />
      <Nav />
    </header>
  );
}
