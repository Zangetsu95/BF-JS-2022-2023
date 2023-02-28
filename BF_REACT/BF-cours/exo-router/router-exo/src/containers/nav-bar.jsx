import { Link, NavLink } from "react-router-dom"
import style from "./nav-bar.module.css"

const CustomLink = ({ to, name }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? style.active : undefined)}
  >
    {({ isActive }) =>
      !isActive ? <span>{name}</span> : <span>{">" + name + "<"}</span>
    }
  </NavLink>
)

const NavBar = () => (
  <nav className={style.main}>
    <ul>
      <li>
        <CustomLink to="" name="Acceuil" />
      </li>
      <li>
        <CustomLink to="/formations" name="Formations" />
      </li>
      <li>
        <CustomLink to="/about" name="About" />
      </li>
    </ul>
  </nav>
)

export default NavBar
