import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LayoutProvider = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default LayoutProvider;
