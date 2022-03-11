import HomePage from "./pages/App";
import CardPage from "./pages/CardPage";
import PlayersPage from "./pages/PlayersPage"

export const routes = {
  "/": {
    component: HomePage,
  },
  "/cards": {
    component: CardPage,
  },
  "/players": {
    component: PlayersPage,
  },
};
