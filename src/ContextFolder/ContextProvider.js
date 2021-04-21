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
  userInfo: { userName: "", password: "", myList: [], userSuggestions: [] },
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
        userInfo: {
          ...action.payload,
          myList: [],
          userSuggestions: state.userInfo.userSuggestions,
        },
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
      console.log(selectedMovie[0]);
      let newUserInfo = { ...state.userInfo };
      newUserInfo.myList = [...newUserInfo.myList, selectedMovie[0]];
      return {
        ...state,
        userInfo: newUserInfo,
      };
    case "SUGGESTIONS":
      const suggestions = action.payload;
      const randomSix = [];
      for (let i = 0; i < 8; i++) {
        const selectIndex = Math.floor(Math.random() * suggestions.length);
        randomSix.push(suggestions[selectIndex]);
        suggestions.splice(selectIndex, 1);
      }
      let suggestedUserInfo = { ...state.userInfo };
      suggestedUserInfo.userSuggestions = randomSix;
      return {
        ...state,
        userInfo: suggestedUserInfo,
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
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=61f7ba464304e92aa6c63502caee9834"
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: "SUGGESTIONS",
          payload: response.results,
        });
      });
  }, []);
  return (
    <UserContext.Provider value={{ mainState: state, myDispatch: dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
