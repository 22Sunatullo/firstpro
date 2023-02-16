import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxstore";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
const renderEdidth = (Server) => {
    root.render(
    <React.StrictMode>
      <App appServer={Server} dispatch={store.dispatch.bind(store)} store = {store} />
    </React.StrictMode>
  );
};

renderEdidth(store.getServer());
store.subscriber(() => {
  let Server = store.getServer();
  renderEdidth(Server);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
