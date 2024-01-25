//////////////////////////////////////////////////////////////
// DEPs AND HOOKS
import {
  fetchMaxCharacters,
  loginService,
  singInService,
} from "./services/apiCall";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
// COMPONENTS
import StarsBackground from "./components/StarBackground/StarsBackground.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import useErrorAlert from "./components/common/useErrorAlert";
// VIEWS
import LoginPage from "./views/Login/LoginPage.jsx";
import CardBoard from "./views/CardBoard/CardsBoard.jsx";
import CardDetail from "./views/CardDetail/CardDetail.jsx";
import { AboutMe } from "./views/AboutMe/AboutMe.jsx";
import { Error404 } from "./views/ERROR404/Error404.jsx";
import Favorites from "./views/Favorites/Favorites.jsx";
// FILES
import "./App.css";
import ROUTES from "./helpers/routes.helper.js";
import { fetchCharacterById } from "./services/apiCall.js";
import ProtectedRoutes from "./helpers/ProtectedRoutes.jsx";
//////////////////////////////////////////////////////////////

function App() {
  // Card collection state
  const [character, setCharacter] = useState([]);
  const [maxCharacters, setMaxCharacters] = useState(0);
  const navigate = useNavigate();
  // Log in data
  const [access, setAccess] = useLocalStorage("acces", false);
  // const maxCharacters = 826;
  const [loginOrRegister, setloginOrRegister] = useState("login");

  useEffect(() => {
    if (maxCharacters === 0) {
      fetchMaxCharacters().then((data) => {
        setMaxCharacters(data);
        console.log(data);
      });
    }
  }, [maxCharacters]);

  const formHandler = (e) => {
    const button = e.target.innerHTML;
    if (button === "Log in") setloginOrRegister("login");
    if (button === "Sing in") setloginOrRegister("register");
  };
  const login = async (userData) => {
    const { username, password } = userData;

    loginService(username, password).then((data) => {
      if (data.status > 399) useErrorAlert(data.response, data.status);
      if (data.access) {
        setAccess(true);
        navigate("/home");
      }
    });
  };

  const register = (userData) => {
    const { first_name, last_name, user_email, user_handle, user_password } =
      userData;

    singInService(
      first_name,
      last_name,
      user_email,
      user_handle,
      user_password
    ).then((data) => {
      if (data.status > 399) useErrorAlert(data.response, data.status);
      else {
        useErrorAlert("User created", 200);
        setTimeout(() => {
          window.location.reload();
        }, 600);
      }
    });
  };
  const logout = () => {
    /**
     * Logout Function
     */
    setAccess(false);
    navigate("/login");
  };
  const addCard = (id) => {
    /**
     * Search card by id .
     * @param {number} id - The id of the chracter.
     * Adds a new element  to the state.
     */
    try {
      fetchCharacterById(id).then((data) => {
        const isDuplicate = character.some((char) => char.id === data.id);

        isDuplicate ? null : setCharacter([...character, data]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const closeCard = (id) => {
    /**
     * Take out the card of the cardboard .
     * @constructor
     * @param {number} id - The id of the chracter.
     * Removes an elemnt of the state
     */
    const updatedList = character.filter((e) => {
      return e.id !== id;
    });
    setCharacter(updatedList);
  };
  const clearBoard = () => {
    /**
     * Clear the card board, removes all items from the state
     */
    setCharacter([]);
    // console.log('object')
  };

  return (
    <>
      <StarsBackground />

      <div className="App">
          <NavBar
            logoutFunction={logout}
            formHandler={formHandler}
            loginOrRegister={loginOrRegister}
          />
        <main className="mainLayout">
          <Routes>
            <Route
              path={ROUTES.LOGIN}
              element={
                <LoginPage
                  registerFunction={register}
                  loginFunction={login}
                  loginOrRegister={loginOrRegister}
                />
              }
            />
            <Route element={<ProtectedRoutes access={access} />}>
              <Route
                path={ROUTES.HOME}
                element={<CardBoard characters={character} close={closeCard} />}
              />
              <Route path={ROUTES.FAVORITE} element={<Favorites />} />
              <Route path="/details/:id" element={<CardDetail />} />
              <Route path={ROUTES.ABOUT} element={<AboutMe />} />
            </Route>

            <Route path="/*" element={<Error404 />} />
          </Routes>

        </main>
          <Footer
            maxChar={maxCharacters}
            addCharacter={addCard}
            clear={clearBoard}
          />
      </div>
    </>
  );
}

export default App;
