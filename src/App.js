import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
//Components
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar></NavBar>
        <SearchBar></SearchBar>
      </div>
    </HashRouter>
  );
}

export default App;
