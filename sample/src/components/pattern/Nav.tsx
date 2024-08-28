import { Link } from "react-router-dom";
import "@/App.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>
        <li>
          <Link to="/content2">Content</Link>
        </li>
        <li>
          <Link to="/content3">LP</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
