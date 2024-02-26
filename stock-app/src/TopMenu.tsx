import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <menu className="topMenu">
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/CreateNewItem`}>Create/edit new item</Link>
      </li>
      <li>
        <Link to={`/ListItems`}>List items</Link>
      </li>
      <li>
        <Link to={`/CreateLocation`}>Create/edit location</Link>
      </li>
    </menu>
  );
};

export default TopMenu;
