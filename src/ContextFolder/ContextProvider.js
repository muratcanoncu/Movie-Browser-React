import React, { useReducer, createContext, useEffect } from "react";
//! https://api.themoviedb.org/3/search/movie?api_key=4ff32b3a95fabacb861ecfa8aa1dfcba&query=${movieName}
//! https://image.tmdb.org/t/p/w200/${posterPath}
const UserContext = createContext();
const initialState = {
  loaded: false,
  loggedIn: false,
  userName: "",
  movieData: [],
  keyWord: "",
  totalMovies: 0,
  myList: [],
  userInfo: { userName: "", password: "" },
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
        userInfo: action.payload,
      };
    case "USER_SIGNOUT":
      return {
        ...state,
        loggedIn: false,
        myList: [],
        keyWord: "",
        userInfo: { userName: "", password: "" },
      };
    case "ADD_MYLIST":
      return {
        ...state,
        myList: [...state.myList, action.payload],
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
    }, 1000);
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
