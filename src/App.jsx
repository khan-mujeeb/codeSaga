//import HomeScreen from "./components/HomeScreen"

import AiInterview from "./pages/AiInterview.jsx"
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
                <Routes>
                    <Route path="/" element={<Rootlayout />}>
                        <Route path="" element={<Navigate to={"CssMenu"} />} />
                        <Route path="/CssMenu" element={<Outlet />}>
                            <Route path="" element={<CssMenu />} />
                            <Route path="unit" element={<UnitGame />} />
                            <Route path="flex" element={<FlexGame />} />
                            <Route path="sql" element={<Sql />} />
                            <Route path="ai-interview" element={<AiInterview />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
            {/* <button type="button" className="login-with-google-btn">
        Sign in with Google
      </button> */}
        </>
    );
};

export default App;
