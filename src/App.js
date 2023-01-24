import "./App.css";
import Cont from "./component/cont";
import Header from "./component/Header";
import Profile from "./component/Profiles";

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
