import "./App.css";
import Cont from "./component/cont/cont";
import Header from "./component/header/Header";
import Profile from "./component/Profile/Profiles";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Cont />
      <Profile />
    </div>
  );
};

export default App;
