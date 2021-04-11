import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
//Components
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import MovieContainer from "./Components/MovieContainer/MovieContainer";
function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar></NavBar>
        <SearchBar></SearchBar>
        <MovieContainer></MovieContainer>
      </div>
    </HashRouter>
  );
}

export default App;
