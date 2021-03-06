import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {ROUTE_CONSTANTS} from "../../lib/Routes";
import {Restaurant} from "../Resturant/Restaurant";

function App() {
  return (
      <div>
        <Switch>
          <Route path={ROUTE_CONSTANTS.RESTAURANT} exact component={Restaurant} />
          <Route
              path="*"
              component={() => {
                return <div>404 Page Not Found</div>;
              }}
          />
        </Switch>
      </div>
  )
}

export default App;
