import { Route, Switch } from "react-router-dom";

import DefaultPage from "../views/DefaultPage";
import Cart from "../views/Cart";
import Favorites from "../views/Favorites";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cart" component={Cart} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/" component={DefaultPage} />
    </Switch>
  );
};

export default Routes;
