import { useState } from "react";

function SearchBar() {
  const [keyWordUpdate, setKeyWordUpdate] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const sendKeyWord = () => {
    setKeyWord(keyWordUpdate);
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
      <button onClick={sendKeyWord}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
