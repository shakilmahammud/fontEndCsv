import { Redirect, Route, useLocation } from "react-router";

export const PrivateRoute = ({children, ...rest}) => {
      const location =useLocation()
     const email=localStorage.getItem("email")
      return (
          <Route
        {...rest}
        render={ location  =>
          email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                location 
              }}
            />
          )
        }
      />
      );
  };