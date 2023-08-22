import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  ROUTES_BASENAME,
  ROUTES_PATH_HOME,
  ROUTES_PATH_LOGIN,
  ROUTES_PATH_ROOT,
} from "./constants/Routes";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter basename={ROUTES_BASENAME}>
      <Routes>
        <Route path={ROUTES_PATH_HOME} element={<Home />} />
        <Route path={ROUTES_PATH_LOGIN} element={<Login />} />
        <Route
          path={ROUTES_PATH_ROOT}
          element={<Navigate to={ROUTES_PATH_HOME} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
