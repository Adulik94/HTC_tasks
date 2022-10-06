import React from "react";
import IndexPage from "./index";
import BusinessesPage from "./businesses";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import "./../util/analytics.js";
import { AuthProvider } from "./../util/auth.js";
import { ThemeProvider } from "./../util/theme.js";

function App(props) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/businesses" component={BusinessesPage} />

            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
