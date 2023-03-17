import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-d5e2bvlrtke86s72.us.auth0.com"
    clientId="xBupB50ZT9mdh6lNcwBkTXKv4BItn4fe"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);
