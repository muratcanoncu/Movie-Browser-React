import React, { useReducer, createContext, useEffect } from "react";
//! https://api.themoviedb.org/3/search/movie?api_key=4ff32b3a95fabacb861ecfa8aa1dfcba&query=${movieName}
//! https://image.tmdb.org/t/p/w200/${posterPath}
const UserContext = createContext();
const initialState = {
  loggedIn: false,
  userName: "",
  movieData: [],
  keyWord: "",
  fetched: false,
  myList: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "KEYWORD_UPDATED":
      return {
        ...state,
        fetched: action.fetched,
        movieData: action.payload,
      };
    case "NEW_KEYWORD":
      return {
        ...state,
        keyWord: action.payload,
      };

    default:
      return state;
  }
};
export function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
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
            fetched: true,
          });
        } else {
          dispatch({
            type: "KEYWORD_UPDATED",
            payload: [],
            fetched: false,
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
