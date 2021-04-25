import { useContext } from "react";
//! ContextApi
import UserContext from "./ContextFolder/ContextProvider";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
//Components
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import MovieContainer from "./Components/MovieContainer/MovieContainer";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/LoadingPage/LoadingPage";
import Login from "./Components/Login/Login";
import UserProfile from "./Components/Profile/Profile";
import AboutUs from "./Components/AboutUs/AboutUs";
import MyList from "./Components/MyList/MyListContainer";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  const context = useContext(UserContext);
  if (!context.mainState.loaded) {
    return (
      <div className="App">
        <Loading></Loading>
      </div>
    );
  } else {
    if (!context.mainState.loggedIn) {
      return (
        <div className="App">
          <Login></Login>
        </div>
      );
    } else {
      return (
        <HashRouter basename="/">
          <div className="App">
            <NavBar></NavBar>
            <Switch>
              <Route path="/" exact>
                <SearchBar></SearchBar>
                <MovieContainer></MovieContainer>
              </Route>
              <Route path="/profile">
                <UserProfile></UserProfile>
              </Route>
              <Route path="/mylist">
                <MyList></MyList>
              </Route>
              <Route path="/aboutus">
                <AboutUs></AboutUs>
              </Route>
              <Route path="/contactus">
                <ContactUs></ContactUs>
              </Route>
            </Switch>

            <Footer></Footer>
          </div>
        </HashRouter>
      );
    }
  }
}

export default App;
