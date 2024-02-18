//import HomeScreen from "./components/HomeScreen"
import { Toaster } from "react-hot-toast";
import Rootlayout from "./layouts/rootlayout";
import CssMenu from "./pages/CssMenu";
import UnitGame from "./pages/UnitGame";
import FlexGame from "./pages/FlexGame";
import Sql from "./pages/Sql.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
//import Quiz from "./pages/Quiz.jsx";

import Register from "./pages/Register.jsx";
import { Provider } from "./context/AuthContext.jsx";
import GridGame from "./pages/GridGame.jsx";
// import "./App.css";

/**
 * - The App component is the entry point of the application.
 * - It is responsible for rendering the top-level components.
 * - It is also responsible for routing.
 *
 */
const App = () => {
  return (
    <>
      <Router>
        <Provider>
          <Toaster />

          <Routes>
            <Route path="/" element={<Rootlayout />}>
              <Route path="" element={<Navigate to={"CssMenu"} />} />
              <Route path="/CssMenu" element={<Outlet />}>
                <Route path="" element={<CssMenu />} />
                <Route path="unit" element={<UnitGame />} />
                <Route path="flex" element={<FlexGame />} />
                <Route path="sql" element={<Sql />} />
                <Route path="register" element={<Register />}></Route>
                <Route path="grid" element={<GridGame />}></Route>
              </Route>
            </Route>
          </Routes>
        </Provider>
      </Router>
      {/* <button type="button" className="login-with-google-btn">
        Sign in with Google
      </button> */}
    </>
  );
};

export default App;
