import { useRoutes } from "react-router-dom";
import "./App.css";
import NavBar from "./containers/navbar/nav-bar";
import appRoute from "./routes/app.route";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import { checkAuth } from "./store/actions/authActions";
import { useEffect } from "react";

function Content() {
  const routes = useRoutes(appRoute);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <div>
        <main>{routes}</main>
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