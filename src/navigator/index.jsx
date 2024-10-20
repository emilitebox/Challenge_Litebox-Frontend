import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContextMemorySpace } from "../context/AuthContext";
import PublicStack from "./PublicStack";
import UserStack from "./UserStack";

const Navigator = () => {
  const { user, mainLoader } = useContext(AuthContextMemorySpace);

  return (
    <>
      <BrowserRouter>
        {!user? (
          /* STACK NOT LOGGED IN */
          <PublicStack />
        ) : (
          /* STACK USER LOGGED IN */
          <UserStack />
        )}
      </BrowserRouter>
    </>
  );
};

export default Navigator;
