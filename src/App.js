import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cont from "./component/cont/cont";
import Header from "./component/header/Header";
import Massage from "./component/Massage/Massage";
import Profile from "./component/Profile/Profiles";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Cont />
        <div className="app-wrap">
          <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Massage" element={<Massage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
