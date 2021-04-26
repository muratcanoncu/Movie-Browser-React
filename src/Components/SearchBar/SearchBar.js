import { useState, useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
function SearchBar() {
  const context = useContext(UserContext);
  const [keyWordUpdate, setKeyWordUpdate] = useState("");
  const sendKeyWord = (dispatch) => {
    dispatch({
      type: "NEW_KEYWORD",
      payload: keyWordUpdate,
    });
    setKeyWordUpdate("");
  };

  return (
    <form
      id="searchBar"
      className="d-flex justify-content-center align-items-center"
      onSubmit={(e) => {
        e.preventDefault();
        return sendKeyWord(context.myDispatch);
      }}
    >
      <input
        type="text"
        placeholder="Movie name . . ."
        value={keyWordUpdate}
        onChange={(e) => setKeyWordUpdate(e.target.value)}
      ></input>
      <button>SEARCH</button>
    </form>
  );
}

export default SearchBar;
