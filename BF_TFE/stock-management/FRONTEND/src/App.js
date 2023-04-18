import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import NavBar from "./containers/navbar/nav-bar";
import appRoute from "./routes/app.route";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { checkAuth } from "./store/actions/authActions";
import { useEffect } from "react";
import PrivateRoute from "./components/admin/admin-components/privateRoute";
import { Outlet } from "@mui/icons-material";
import AdminRoute from "./components/admin/admin-components/adminRoute";

function Content() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <div>
        <main>
          <Routes>
            {appRoute.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="/admin" element={<AdminRoute />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App;