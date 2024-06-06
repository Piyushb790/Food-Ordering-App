import { useRef, useState } from "react";
import { validate } from "../utils/helper";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleValidate = () => {
    const msg = validate(email.current.value, password.current.value);
    setErrMsg(msg);

    if (msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " " + errorMessage);
        });
    } else if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " " + errorMessage);
        });
    }
  };

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="bg-[#FF5F1F] bg-opacity-60 p-10 w-4/12 rounded-lg mx-auto mt-10 mb-44">
          <h1 className="text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              // ref={fullName}
              type="text"
              placeholder="Full Name"
              className="block border bg-slate-100 focus:bg-white my-4 p-2 outline-none rounded-lg w-full"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Mobile Number  "
            className="block border bg-slate-100 focus:bg-white my-4 p-2 outline-none rounded-lg w-full"
          />
          <input
            ref={password}
            type="text"
            placeholder="Password "
            className="block border my-4 p-2 bg-slate-100 focus:bg-white  outline-none rounded-lg w-full"
          />

          <p className="text-red-700 font-medium  ">{errMsg}</p>

          <button
            className="my-6 border p-2 bg-white  rounded-lg w-full"
            onClick={handleValidate}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div>
            {isSignIn ? (
              <p>
                New to Doon Delights?
                <a
                  className="underline cursor-pointer ml-1"
                  onClick={handleToggleForm}
                >
                  Sign up now.
                </a>
              </p>
            ) : (
              <p>
                Already a User?
                <a
                  onClick={handleToggleForm}
                  className="ml-1 underline cursor-pointer"
                >
                  Sign In Now
                </a>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
