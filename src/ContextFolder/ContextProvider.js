import React, { useReducer, createContext, useEffect } from "react";
//! https://api.themoviedb.org/3/search/movie?api_key=4ff32b3a95fabacb861ecfa8aa1dfcba&query=${movieName}
//! https://image.tmdb.org/t/p/w200/${posterPath}
const UserContext = createContext();
const initialState = {
  loaded: false,
  loggedIn: false,
  movieData: [],
  keyWord: "",
  totalMovies: 0,
  userInfo: { userName: "", password: "", myList: [] },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "KEYWORD_UPDATED":
      return {
        ...state,
        totalMovies: action.total_pages,
        movieData: action.payload,
      };
    case "NEW_KEYWORD":
      return {
        ...state,
        keyWord: action.payload,
      };
    case "PAGE_LOADED":
      return {
        ...state,
        loaded: true,
      };
    case "USER_LOGIN":
      return {
        ...state,
        loggedIn: true,
        userInfo: { ...action.payload, myList: [] },
      };
    case "USER_SIGNOUT":
      return {
        ...state,
        loggedIn: false,
        keyWord: "",
        userInfo: { userName: "", password: "", myList: [] },
      };
    case "ADD_MYLIST":
      const selectedMovie = state.movieData.filter((movie) => {
        return movie.id === action.payload;
      });
      console.log(selectedMovie);
      let newUserInfo = { ...state.userInfo };
      console.log(newUserInfo);
      newUserInfo.myList = [...newUserInfo.myList, selectedMovie];
      console.log(newUserInfo);
      return {
        ...state,
        userInfo: newUserInfo,
      };

    default:
      return state;
  }
};
export function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "PAGE_LOADED",
      });
    }, 600);
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4ff32b3a95fabacb861ecfa8aa1dfcba&query=${state.keyWord}`
    )
      .then((responseData) => responseData.json())
      .then((responseData) => {
        // console.log(responseData.total_pages > 0);
        if (responseData.total_pages > 0) {
          dispatch({
            type: "KEYWORD_UPDATED",
            payload: responseData.results,
            total_pages: responseData.total_pages,
          });
        } else {
          dispatch({
            type: "KEYWORD_UPDATED",
            payload: [],
            total_pages: responseData.total_pages,
          });
        }
      });
  }, [state.keyWord]);
  return (
    <UserContext.Provider value={{ mainState: state, myDispatch: dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
