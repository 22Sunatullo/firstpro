import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cont from "./component/cont/cont";
import Header from "./component/header/Header";
import Massage from "./component/Massage/Massage";
import Music from "./component/Music/Music";
import News from "./component/News/News";
import Profile from "./component/Profile/Profiles";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Cont />
        <div className="app-wrap">
          <Routes>
            <Route
              path="/Profile"
              element={
                <Profile
                  net={props.appServer.profile.postData}
                  nawChane={props.appServer.profile.nawChane}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/Massage/*"
              element={
                <Massage
                  messag={props.appServer.messageData}
                  dialog={props.appServer.dialogData}
                />
              }
            />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
