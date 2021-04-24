import { useContext } from "react";
import UserContext from "../../../ContextFolder/ContextProvider";
function SuggestionCard(props) {
  const context = useContext(UserContext);
  const addFavoriteList = (dispatch) => {
    dispatch({
      type: "ADD_THE_SUGGESTION",
      payload: props.id,
    });
  };
  return (
    <div
      className="movieCard"
      onClick={() => addFavoriteList(context.myDispatch)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200/${props.poster}`}
        className="w-100"
        style={{ height: "87%" }}
      ></img>
      <h5
        className="d-flex justify-content-center align-items-center text-center"
        style={{ height: "13%" }}
      >
        {props.movieName}
      </h5>
    </div>
  );
}

export default SuggestionCard;
