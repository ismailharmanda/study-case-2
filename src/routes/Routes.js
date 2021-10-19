import { Redirect, Route, Switch } from "react-router-dom";

import DefaultPage from "../views/DefaultPage";
import Cart from "../views/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route path="/cart/" component={Cart} />
      <Route path="/" component={DefaultPage} />
    </Switch>
  );
};

export default Routes;
