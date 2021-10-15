import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import StarshipContent from "../components/starshipDetail/StarshipContent";
import StarshipList from "../components/starships/StarshipList";
import StarshipLayout from "../components/ui/StarshipLayout";
import styled from "styled-components";
import Welcome from "../components/Welcome/Welcome";

const NotFoundStyle= styled.div`
  text-align: center;
  margin: 25% 10%;
`;

export default function router() {
  return (
    <Router>
      <StarshipLayout>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/starships" component={StarshipList} />
          <Route exact path="/starships/:id" component={StarshipContent} />
          <Route path="*" component={() => <NotFoundStyle>Not found 404</NotFoundStyle>} />
        </Switch>
      </ScrollToTop>
      </StarshipLayout>
    </Router>
  );
}
