import { useContext } from "react";
import UserContext from "../../../ContextFolder/ContextProvider";
function MovieCard(props) {
  const context = useContext(UserContext);
  //   console.log(context);
  const removeFromList = (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_LIST",
      payload: props.id,
    });
  };
  return (
    <div
      className="movieCard"
      onClick={() => removeFromList(context.myDispatch)}
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

export default MovieCard;
