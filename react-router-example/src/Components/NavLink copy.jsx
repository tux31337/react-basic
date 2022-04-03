import { NavLink } from "react-router-dom";

const activestyle = { color: "red" };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" activeStyle={activestyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeStyle={activestyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activestyle}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activestyle}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/about?name=mark" activeStyle={activestyle}>
          About?name=mark
        </NavLink>
      </li>
    </ul>
  );
}
