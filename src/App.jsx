//import HomeScreen from "./components/HomeScreen"
import AiInterview from "./pages/AiInterview.jsx";
import Rootlayout from "./layouts/rootlayout";
import CssMenu from "./pages/CssMenu";
import UnitGame from "./pages/UnitGame";
import FlexGame from "./pages/FlexGame";
import { Sugar } from "react-preloaders";
import Sql from "./pages/Sql.jsx";
import { Toaster } from "react-hot-toast";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
//import Quiz from "./pages/Quiz.jsx";

import { Provider } from "./context/AuthContext.jsx";
import GridGame from "./pages/GridGame.jsx";
import { useEffect, useState } from "react";
// import "./App.css";

/**
 * - The App component is the entry point of the application.
 * - It is responsible for rendering the top-level components.
 * - It is also responsible for routing.
 *
 */
import React from "react";
import Quizui from "./pages/Quizui.jsx";

const App = () => {
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    isLoading(true);
    setTimeout(() => {
      isLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <React.Fragment>
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
                  <Route path="quiz" element={<Quizui/>}></Route>
                  <Route path="grid" element={<GridGame />}></Route>
                  <Route path="ai-interview" element={<AiInterview />} />
                </Route>
              </Route>
            </Routes>
          </Provider>
        </Router>
        <Sugar color="#65A30D" customLoading={loading} time={1800} />
      </React.Fragment>
      {/* <button type="button" className="login-with-google-btn">
        Sign in with Google
      </button> */}
    </>
  );
};

export default App;
