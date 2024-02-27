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

import GridGame from "./pages/GridGame.jsx";
import { useEffect, useState } from "react";
// import Authentications from "./pages/Authentications";
// import "./App.css";

/**
 * - The App component is the entry point of the application.
 * - It is responsible for rendering the top-level components.
 * - It is also responsible for routing.
 *
 */
import React from "react";
// import Quizui from "./pages/Quizui.jsx";
import QuizDemo from "./pages/QuizDemo.jsx";
import QuizWithAuth from "./pages/QuizWithAuth.jsx";
import Quizui from "./pages/Quizui.jsx";
import SliderMenu from "./components/SlidingMenu/SliderMenu.jsx";

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
                            <Route
                                path=""
                                element={<Navigate to={"CssMenu"} />}
                            />
                            <Route path="/CssMenu" element={<Outlet />}>
                                <Route path="" element={<CssMenu />} />
                                <Route path="unit" element={<UnitGame />} />
                                <Route path="flex" element={<FlexGame />} />
                                <Route path="sql" element={<Sql />} />

                                <Route
                                    path="grid"
                                    element={<SliderMenu />}
                                ></Route>
                                <Route
                                    path="ai-interview"
                                    element={<AiInterview />}
                                />
                                <Route
                                    path="Authentications"
                                    element={<QuizWithAuth />}
                                />
                            </Route>
                        </Route>
                    </Routes>
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
