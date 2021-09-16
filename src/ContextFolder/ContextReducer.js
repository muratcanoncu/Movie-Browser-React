export default function reducer(state, action) {
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
        userInfo: {
          userName: "",
          password: "",
          myList: [],
          userSuggestions: [...state.userInfo.userSuggestions],
        },
      };
    case "ADD_MYLIST":
      const selectedMovie = state.movieData.filter((movie) => {
        return movie.id === action.payload;
      });
      let newUserInfo = { ...state.userInfo };
      let alreadyInList = newUserInfo.myList.includes(selectedMovie[0]);
      if (!alreadyInList) {
        newUserInfo.myList = [...newUserInfo.myList, selectedMovie[0]];
      } else {
        alert("This movie already in your list !");
        newUserInfo.myList = [...newUserInfo.myList];
      }
      return {
        ...state,
        userInfo: newUserInfo,
      };
    case "ADD_THE_SUGGESTION":
      const selectedSuggestion = state.userInfo.userSuggestions.filter(
        (movie) => {
          return movie.id === action.payload;
        }
      );
      let newUserInfoSuggestions = { ...state.userInfo };
      let exits = newUserInfoSuggestions.myList.includes(selectedSuggestion[0]);
      if (!exits) {
        newUserInfoSuggestions.myList = [
          ...newUserInfoSuggestions.myList,
          selectedSuggestion[0],
        ];
      } else {
        alert("This movie already in your list !");
        newUserInfoSuggestions.myList = [...newUserInfoSuggestions.myList];
      }
      return {
        ...state,
        userInfo: newUserInfoSuggestions,
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
    case "REMOVE_FROM_LIST":
      let removedList = state.userInfo.myList.filter((movie) => {
        return movie.id !== action.payload;
      });
      let updatedUserInfo = { ...state.userInfo };
      updatedUserInfo.myList = removedList;
      return {
        ...state,
        userInfo: updatedUserInfo,
      };
    default:
      return state;
  }
}
