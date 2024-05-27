//import HomeScreen from "./components/HomeScreen"
import AiInterview from "./pages/AiInterview.jsx";
import Rootlayout from "./layouts/rootlayout";

import UnitGame from "./pages/UnitGame";

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

import GridGame from "./pages/GridGame.jsx";
import { useEffect, useState } from "react";
import NthSelector from "./components/labs/nth-child/NthSelector.jsx"

import Animation from "./components/labs/animation/Animation.jsx";
import React from "react";

import QuizWithAuth from "./pages/QuizWithAuth.jsx";

import SliderMenu from "./components/SlidingMenu/SliderMenu.jsx";
import SelectorCSS from "./pages/SelectorCSS.jsx";
import FlexOptimised from "./pages/FlexOptimised.jsx";
import Demolab from "./pages/Demolab.jsx";

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
          <Toaster />

          <Routes>
            <Route path="/" element={<Rootlayout />}>
              <Route path="" element={<Navigate to={"CssMenu"} />} />
              <Route path="/CssMenu" element={<Outlet />}>
                <Route path="" element={<SliderMenu />} />
                <Route path="unit" element={<UnitGame />} />
                <Route path="flex" element={<FlexOptimised />} />
                <Route path="demolab" element={<Demolab />} />
                <Route path="sql" element={<Sql />} />

                <Route path="/CssMenu/demolab/nth-child" element={<NthSelector />} />
                <Route path="/CssMenu/demolab/unit" element={<UnitGame />} />
                <Route path="/CssMenu/demolab/animation" element={<Animation />} />

                <Route path="grid" element={<GridGame />}></Route>
                <Route path="ai-interview" element={<AiInterview />} />
                <Route path="Authentications" element={<QuizWithAuth />} />
                <Route path="cssSlelectors" element={<SelectorCSS />} />
              </Route>
            </Route>
          </Routes>
        </Router>
        <Sugar
          background={"#000000"}
          color="#65A30D"
          customLoading={loading}
          time={1800}
        />
      </React.Fragment>
    </>
  );
};

export default App;
