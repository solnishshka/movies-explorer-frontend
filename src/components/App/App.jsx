import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import Header from "../Header";
import Footer from "../Footer";
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Profile from "../../pages/Profile";
import Movies from "../../pages/Movies";
import SavedMovies from "../../pages/SavedMovies";
import PageNotFound from "../../pages/PageNotFound";
import ProtectedRoute from "../ProtectedRoute";
import InfoTooltipPopup from "../InfoTooltipPopup";
import Preloader from "../Preloader";

import routes from "../../config/routes";

import {
  register,
  login,
  checkToken,
  getUserInfo,
  updateProfile,
  addNewMovie,
  getSavedMovies,
  deleteMovie,
} from "../../utils/MainApi";

import { getMovies } from "../../utils/MoviesApi";

import moviesMapper from "../../utils/moviesMapper";
import moviesFinder from "../../utils/moviesFinder";

import "./App.css";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessRequest, setIsSuccessRequest] = useState(false);
  const [isInfoTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [isInfoTooltipPopupMessage, setIsTooltipPopupMessage] = useState("");

  const handleTokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      const token = localStorage.getItem("jwt");

      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsTokenChecked(true);
          handleGetSavedMovies();
          handleGetUserInfo();
        });
    }
  };

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((result) => {
        if (result) {
          history.push("/signin");
          setIsSuccessRequest(true);
          setIsTooltipPopupOpen(true);
          setIsTooltipPopupMessage("Вы успешно зарегистрированы!");
        }
      })
      .catch((err) => {
        setIsTooltipPopupOpen(true);
        setIsTooltipPopupMessage(err.message);
        console.log(err.status);
      });
  };

  const handleLogin = async (email, password) => {
    login(email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          localStorage.setItem("jwt", res.token);
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsTooltipPopupOpen(true);
        setIsTooltipPopupMessage(err.message);
      })
      .finally(() => {
        handleGetSavedMovies();
        handleGetUserInfo();
      });
  };

  const handleProfileUpdate = (name, email) => {
    updateProfile(name, email)
      .then((res) => {
        if (res) {
          setCurrentUser({ name: res.name, email: res.email });
          setIsSuccessRequest(true);
          setIsTooltipPopupOpen(true);
          setIsTooltipPopupMessage("Данные успешно обновлены!");
        }
      })
      .catch((err) => {
        setIsTooltipPopupOpen(true);
        setIsTooltipPopupMessage(err.message);
        console.log(err);
      });
  };

  const handleLogout = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    setSavedMovies([]);
    setMovies([]);
    history.push("/signin");
  };

  const handleGetUserInfo = () => {
    getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetMovies = (request, isShort, setResult) => {
    setIsLoading(true);
    getMovies()
      .then((res) => {
        if (res) {
          const moviesEntities = moviesMapper(res);
          localStorage.setItem("movies", JSON.stringify(moviesEntities));
          setMovies(moviesEntities);
          setResult(moviesFinder(moviesEntities, request, isShort));
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGetSavedMovies = () => {
    getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddNewMovie = (movie) => {
    addNewMovie(movie)
      .then((res) => {
        if (res) {
          setSavedMovies((prevState) => [...prevState, res]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(id)
      .then((res) => {
        if (res) {
          setSavedMovies(
            savedMovies.filter((movie) => {
              return movie._id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("movies")));
  }, []);

  function handleOvelayOrCrossClose(evt) {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close-button")
    ) {
      setIsTooltipPopupOpen(false);
    }
  }

  const handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      setIsTooltipPopupOpen(false);
    }
  };

  return (
    <div className="App" onKeyUp={handleEscClose}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          {!isTokenChecked && <Preloader />}
          {isTokenChecked && (
            <Switch>
              <Route exact path={routes.HOME}>
                <Header auth={loggedIn} />
                <Main />
                <Footer />
              </Route>
              <Route path={routes.MOVIES}>
                <Header type="dark" auth={loggedIn} />
                <ProtectedRoute
                  path={routes.MOVIES}
                  component={Movies}
                  onSearch={handleGetMovies}
                  handleAddNewMovie={handleAddNewMovie}
                  handleDeleteMovie={handleDeleteMovie}
                  movies={movies}
                  savedMovies={savedMovies}
                  isLoading={isLoading}
                  loggedIn={loggedIn}
                />
                <Footer />
              </Route>
              <Route path={routes.SAVED_MOVIES}>
                <Header type="dark" auth={loggedIn} />
                <ProtectedRoute
                  path={routes.SAVED_MOVIES}
                  component={SavedMovies}
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                  loggedIn={loggedIn}
                />
                <Footer />
              </Route>
              <Route path={routes.PROFILE}>
                <Header type="dark" auth={loggedIn} />
                <ProtectedRoute
                  path={routes.PROFILE}
                  component={Profile}
                  handleProfileUpdate={handleProfileUpdate}
                  handleLogout={handleLogout}
                  loggedIn={loggedIn}
                />
              </Route>
              <Route path={routes.SIGNUP}>
                <Register handleRegister={handleRegister} />
              </Route>
              <Route path={routes.SIGNIN}>
                <Login handleLogin={handleLogin} />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          )}
          <InfoTooltipPopup
            success={isSuccessRequest}
            isOpen={isInfoTooltipPopupOpen}
            onClose={handleOvelayOrCrossClose}
            message={isInfoTooltipPopupMessage}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
