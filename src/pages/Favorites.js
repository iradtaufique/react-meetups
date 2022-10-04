import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favarites-context";

function FavoritePage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>No Fovorite yet. start Add Some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritePage;
