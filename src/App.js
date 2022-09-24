import { Route, Switch } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritePage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorite">
          <FavoritePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
