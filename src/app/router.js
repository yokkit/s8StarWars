import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import StarshipMain from "../pages/StarshipMain";
import StarshipDetail from "../pages/StarshipDetail";

export default function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StarshipMain} />
        <Route exact path="/starship/:id" component={StarshipDetail} />
        <Route path="*" component={() => <div>Not found 404</div>} />
      </Switch>
    </BrowserRouter>
  );
}
