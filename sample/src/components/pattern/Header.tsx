import { Link } from "react-router-dom";
import reactLogo from "@/assets/react.svg";
import "@/App.css";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src={reactLogo} alt="React logo" />
        </Link>
        Header
      </h1>
    </header>
  );
}

export default Header;
