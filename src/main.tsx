import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Find all widget divs
const WidgetDivs = document.querySelectorAll(".reddit_widget");

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  ReactDOM.createRoot(Div as HTMLElement).render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>
  );
});
