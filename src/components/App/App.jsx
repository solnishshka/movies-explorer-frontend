import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Profile from "../../pages/Profile";
import Movies from "../../pages/Movies";
import SavedMovies from "../../pages/SavedMovies";
import PageNotFound from "../../pages/PageNotFound";

import routes from "../../config/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path={routes.HOME}>
            <Header auth={false} />
            <Main />
            <Footer />
          </Route>
          <Route path={routes.MOVIES}>
            <Header type="dark" />
            <Movies />
            <Footer />
          </Route>
          <Route path={routes.SAVED_MOVIES}>
            <Header type="dark" />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path={routes.PROFILE}>
            <Header type="dark" />
            <Profile name="Анастасия" />
          </Route>
          <Route path={routes.SIGNUP}>
            <Register />
          </Route>
          <Route path={routes.SIGNIN}>
            <Login />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
