import Button from './Button';
import { Link } from 'react-router-dom';
import '../stylesheets/links.css';

function Nav() {
  return (
    <ul className="links-container">
      <Link to="/">
        <li className="links">
          <Button title="Home" />
        </li>
      </Link>
      <Link to="/play/single">
        <li className="links">
          <Button title="Single Player" />
        </li>
      </Link>

      <Link to="/play/mult">
        <li className="links">
          <Button title="Multiplayer" />
        </li>
      </Link>

      <Link to="/history">
        <li className="links">
          <Button title="History" />
        </li>
      </Link>
    </ul>
  );
}

export default Nav;
