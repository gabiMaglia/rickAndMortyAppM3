//////////////////////////////////////////////////////////////
// DEPs AND HOOKS
import { loginService } from "./services/apiCall";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
// COMPONENTS
import StarsBackground from "./components/StarBackground/StarsBackground.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
// VIEWS
import Login from "./views/Login/Login.jsx";
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
  const navigate = useNavigate();
  // Log in data
  const [access, setAccess] = useLocalStorage("acces", false);
  const maxCharacters = 826;

  const login = (userData) => {
    /**
     * Login Function
     * @param {object} userCredentials - Credenciales de inicio de sesión.
     * @param {string} userCredentials.username - El nombre de usuario para iniciar sesión.
     * @param {string} userCredentials.password - La contraseña para iniciar sesión.
     */

    const { username, password } = userData;

    loginService(username, password).then((data) => {
      if (data.access) {
        setAccess(true);
        navigate("/home");
      } else {
        alert("Email or password invalid");
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
    <div className="App">
      <StarsBackground />

      <main className="mainLayout">
        <NavBar logoutFunction={logout} />
        <Routes>
          <Route
            path={ROUTES.LOGIN}
            element={<Login loginFunction={login} />}
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

        <Footer
          maxChar={maxCharacters}
          addCharacter={addCard}
          clear={clearBoard}
        />
      </main>
    </div>
  );
}

export default App;
