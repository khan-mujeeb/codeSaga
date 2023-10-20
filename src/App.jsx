//import HomeScreen from "./components/HomeScreen"

import Rootlayout from "./layouts/rootlayout";
import CssMenu from "./pages/CssMenu";
import UnitGame from "./pages/UnitGame";
import FlexGame from "./pages/FlexGame";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

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
            </Route>
          </Route>
        </Routes>

        {/* <Route exact path="/flex" component={FlexGame} />
      <Route exact path="/unit" component={UnitGame} /> */}
      </Router>
    </>
  );
};

export default App;
