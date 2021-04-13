import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
//Components
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import MovieContainer from "./Components/MovieContainer/MovieContainer";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/">
            <SearchBar></SearchBar>
            <MovieContainer></MovieContainer>
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
