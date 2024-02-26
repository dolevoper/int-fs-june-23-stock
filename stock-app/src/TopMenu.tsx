import { Link } from "react-router-dom";
import styles from "./TopMenu.module.scss";

export function TopMenu() {
  return (
    <nav>
        <menu className={styles.topMenu}>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/item`}>Create item</Link>
          </li>
          <li>
            <Link to={`/items`}>List items</Link>
          </li>
          <li>
            <Link to={`/location`}>Create location</Link>
          </li>
        </menu>
    </nav>
  );
}