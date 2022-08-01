import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

// rafce for React template

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
