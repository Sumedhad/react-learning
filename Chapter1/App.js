import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../Chapter1/src/components/Header"; // Import Header component
import Body from "../Chapter1/src/components/Body"; //Import Body component

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
