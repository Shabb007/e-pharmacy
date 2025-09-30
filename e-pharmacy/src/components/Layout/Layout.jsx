import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const [headerStyles, setHeaderStyles] = React.useState({
    backgroundColorHeader: "#ffffff",
    colorlogo: " rgb(89, 177, 122)",
    colorlogoText: "black",
  });
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setHeaderStyles({
          backgroundColorHeader: " rgb(89, 177, 122)",
          colorlogo: "#ffffff",
          colorlogoText: "#ffffff",
        });
        break;
      case "/Medicine":
        setHeaderStyles({
          backgroundColorHeader: "#ffffff",
          colorlogo: " rgb(89, 177, 122)",
          colorlogoText: "black",
        });

        break;

      case "/Store":
        setHeaderStyles({
          backgroundColorHeader: "#ffffff",
          colorlogo: " rgb(89, 177, 122)",
          colorlogoText: "black",
        });

        break;
      default:
        setHeaderStyles({
          backgroundColorHeader: "#ffffff",
          colorlogo: " rgb(89, 177, 122)",
          colorlogoText: "black",
        });

        break;
    }
  }, [location.pathname]);
  return (
    <>
      <Header headerStyles={headerStyles} />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
