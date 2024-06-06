import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  const errMsg = useRouteError();
  const { status, statusText } = err;
  const { message } = errMsg.error;
  return (
    <div className="m-28">
      <h1 className="font-semibold text-4xl mb-5 ">
        ! OOPS {status} {statusText} !
      </h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
