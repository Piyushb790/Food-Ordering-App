import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/classComponents/ProfileClass";
import { Suspense, lazy, useState } from "react";
import Shimmer from "./components/Shimmer";
import { darkTheme, lightTheme } from "./components/utils/theme";
import ThemeContext from "./components/utils/ThemeContext";
import { Provider } from "react-redux";
import appStore from "./components/Redux/appstore";
import Success from "./components/Success";
import Login from "./components/Authentiacation/Login";

const AppLayout = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <Provider store={appStore}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          style={{ background: theme.background, color: theme.color }}
          className="px-40 font-NotoSans"
        >
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
};

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: <ProfileClass />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default AppLayout;
