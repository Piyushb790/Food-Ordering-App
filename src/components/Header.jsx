import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "./hooks/useOnline";
import ThemeContext from "./utils/ThemeContext";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { addUser, removeUser } from "./Redux/userSlice";

import { useDispatch } from "react-redux";
import { auth } from "../components/utils/firebase";

import { onAuthStateChanged, signOut } from "firebase/auth";
/**Header */
const Header = () => {
  const [login, setLogin] = useState(null);

  const online = useOnline();
  const { toggleTheme } = useContext(ThemeContext);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLogin(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(user);
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="navbar flex items-center justify-between " login={login}>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" className="w-24" />
        </a>
      </div>
      {login && (
        <nav>
          <ul className="flex gap-x-8 font-semibold text-lg">
            <Link to="/browse">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About </li>
            </Link>

            <Link to="/profile">
              <li>Profile</li>
            </Link>
            <Link to="/instamart">
              <li>Help</li>
            </Link>
          </ul>
        </nav>
      )}
      {login && (
        <div className="flex  items-center  gap-x-4  w-34">
          <div className="relative ">
            <Link to="/cart">
              <img src={cart} alt="cart" className="w-10" />
            </Link>
            <div className="absolute top-[-10px] left-4 z-10 w-6 h-6 bg-black text-center text rounded-full text-white">
              {cartItems.length}
            </div>
          </div>
          <div>
            <label className="flex items-center gap-x-1 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div
                className="relative w-11 h-6 bg-gray-200   peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"
                onClick={toggleTheme}
              ></div>
            </label>
          </div>
          <span className="-ml-2">dark</span>

          <div>
            <button onClick={() => handleSignOut()}>Logout</button>
          </div>
          <div className="text-xs">{online ? "🟢" : "🔴"}</div>
        </div>
      )}
    </div>
  );
};

export default Header;
