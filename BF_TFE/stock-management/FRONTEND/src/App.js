import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import NavBar from "./containers/navbar/nav-bar";
import appRoute from "./routes/app.route";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { checkAuth } from "./store/actions/authActions";
import { useEffect } from "react";


function Content() {
  const routes = useRoutes(appRoute);
  const dispatch = useDispatch();
  const location = useLocation();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.userRole);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    console.log('get --->userRole :>> ', userRole);
    if (userRole) {
      console.log('userRole :>> ', userRole);
      dispatch({ type: "SET_USER_ROLE", payload: userRole });
    }
    dispatch(checkAuth());
  }, [dispatch, userRole]);


  useEffect(() => {
    const getRedirectPath = (role) => {
      switch (role) {
        case "admin":
          return "/";
        case "user":
          return "/";
        default:
          return "/login";
      }
    };

    const protectedRoutes = [
      //USER ROUTE
      {
        path: "/product",
        roleRequired: "user",
      },
      {
        path: ":productId",
        roleRequired: "user",
      },
      {
        path: "/cart",
        roleRequired: "user"
      },
      {
        path: "/cart/paying",
        roleRequired: "user"
      },
      {
        path: "profile",
        roleRequired: "user"
      },
      //ADMIN ROUTE
      {
        path: "/admin",
        roleRequired: "admin",
      },
      {
        path: "/admin/product/:id",
        roleRequired: "admin"
      },
      {
        path: "/admin/create-product",
        roleRequired: "admin"
      },
      {
        path: "/admin/supplier/:id",
        roleRequired: "admin"
      },
      {
        path: "/admin/create-supplier",
        roleRequired: "admin"
      },
      {
        path: "/admin/stocks/:id",
        roleRequired: "admin"
      },
      {
        path: "/admin/category/:id",
        roleRequired: "admin"
      },
      {
        path: "/admin/create-category",
        roleRequired: "admin"
      },
    ];

    const currentRoute = protectedRoutes.find((route) =>
      location.pathname.startsWith(route.path)
    );

    if (
      currentRoute &&
      (!isAuthenticated || userRole !== currentRoute.roleRequired)
    ) {
      const redirectTo = isAuthenticated
        ? getRedirectPath(userRole)
        : "/login";
      window.location.href = redirectTo;
    }

  }, [isAuthenticated, userRole]);



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