import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetup</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetup</Link>
          </li>
          <li>
            <Link to={"/favorite"}>Favorite Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
