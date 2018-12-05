import React from "react";

import Home from "./Home";
import Impressum from "./Impressum";
import useLocation from "./useLocation";

function Pages() {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/impressum":
      return <Impressum />;
    default:
      return <Home />;
  }
}

export default Pages;
