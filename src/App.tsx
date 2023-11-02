import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  ROUTES_BASENAME,
  ROUTES_PATH_HOME,
  ROUTES_PATH_LOGIN,
  ROUTES_PATH_ROOT,
} from "./constants/Routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { getToken } from "utils/Auth";
import { Toaster } from "react-hot-toast";
import { ApiClientSetting } from "api/apiClient";

const RequireAuth = ({ children, redirectTo }: any) => {
  const isAuthenticated = getToken();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

function App() {
  return (
    <>
      <BrowserRouter basename={ROUTES_BASENAME}>
        <ApiClientSetting />
        <Toaster />
        <Routes>
          <Route
            path={ROUTES_PATH_HOME}
            element={
              <RequireAuth redirectTo={ROUTES_PATH_LOGIN}>
                <Home />
              </RequireAuth>
            }
          />
          <Route path={ROUTES_PATH_LOGIN} element={<Login />} />
          <Route
            path={ROUTES_PATH_ROOT}
            element={<Navigate to={ROUTES_PATH_HOME} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
