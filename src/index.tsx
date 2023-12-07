import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import CookieConsent from "react-cookie-consent";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
  </React.StrictMode>
);
