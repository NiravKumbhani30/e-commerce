import React from "react";
import Navbar from "./Nevbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
