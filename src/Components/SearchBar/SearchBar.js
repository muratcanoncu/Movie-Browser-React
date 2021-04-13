import { useState, useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function SearchBar() {
  const context = useContext(UserContext);
  const [keyWordUpdate, setKeyWordUpdate] = useState("");
  // const [keyWord, setKeyWord] = useState("");
  // const setNewKeyWord = () => {
  //   setKeyWord(keyWordUpdate);
  //   setKeyWordUpdate("");
  // };

  // console.log(keyWordUpdate, keyWord);
  const sendKeyWord = (dispatch) => {
    dispatch({
      type: "NEW_KEYWORD",
      payload: keyWordUpdate,
    });
    setKeyWordUpdate("");
  };

  return (
    <div
      id="searchBar"
      className="d-flex justify-content-center align-items-center w-100"
    >
      <input
        type="text"
        value={keyWordUpdate}
        onChange={(e) => setKeyWordUpdate(e.target.value)}
      ></input>
      <button onClick={() => sendKeyWord(context.myDispatch)}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
