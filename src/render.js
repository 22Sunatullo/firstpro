import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {addPost} from "./redux/server";



const root = ReactDOM.createRoot(document.getElementById("root"));
export const renderEdidth = (Server) =>{

root.render(
  <React.StrictMode>
    <App appServer = {Server} aPost = {addPost} />
  </React.StrictMode>
);}
