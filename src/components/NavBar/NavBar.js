import Container from "../Container/Container";
import { Link, NavLink } from 'react-router-dom';
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.navWrapper}>
          <div className={styles.icon}>
            <span className={"fa fa-tasks"} />
          </div>
          <ul className={styles.menuList}>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to ="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
