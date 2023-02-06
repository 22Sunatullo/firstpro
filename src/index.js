import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Server from "./redux/server";
import { renderEdidth } from "./render";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, update } from "./redux/server";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const renderEdidth = (Server) => {
  root.render(
    <React.StrictMode>
      <App appServer={Server} update={update} aPost={addPost} />
    </React.StrictMode>
  );
};

renderEdidth(Server);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
