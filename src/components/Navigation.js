import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <NavLink to="/" activeClassName="selected" exact>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/posts" activeClassName="selected">
          Posts
        </NavLink>
      </li>

      <li>
        <NavLink to="/albums" activeClassName="selected">
          Albums
        </NavLink>
      </li>

      <li>
        <NavLink to="/photos" activeClassName="selected">
          Photos
        </NavLink>
      </li>

      <li>
        <NavLink to="/todos" activeClassName="selected">
          Todos
        </NavLink>
      </li>
    </ul>
  );
}
