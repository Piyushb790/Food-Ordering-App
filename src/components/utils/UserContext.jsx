import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Piyush Bhatt",
    email: "support@piyushb@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
