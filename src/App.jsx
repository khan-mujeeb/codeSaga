//import HomeScreen from "./components/HomeScreen"

import AiInterview from "./pages/AiInterview.jsx";
import AiInterview2 from "./pages/AiInterview2.jsx";
import Rootlayout from "./layouts/rootlayout";
import CssMenu from "./pages/CssMenu";
import UnitGame from "./pages/UnitGame";
import FlexGame from "./pages/FlexGame";
import { Lines } from "react-preloaders";
import Sql from "./pages/Sql.jsx";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Outlet,
} from "react-router-dom";
import React from "react";


const App = () => {
    return (
        <>
            <React.Fragment>
                <Router>
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
                                    path="ai-interview"
                                    element={<AiInterview />}
                                />
                                <Route
                                    path="ai-interview2"
                                    element={<AiInterview2 />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </Router>
                <Lines />
            </React.Fragment>
            
        </>
    );
};

export default App;
