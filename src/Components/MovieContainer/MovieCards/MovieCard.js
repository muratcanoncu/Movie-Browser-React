import { useContext } from "react";
import UserContext from "../../../ContextFolder/ContextProvider";
function MovieCard(props) {
  const context = useContext(UserContext);
  const addFavoriteList = (dispatch) => {
    dispatch({
      type: "ADD_MYLIST",
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
        style={{ height: "80%" }}
      ></img>
      <div className="bottom" style={{ height: "22%" }}>
        <h5 className="d-flex justify-content-center align-items-center text-center">
          {props.movieName}
        </h5>
        <div className="d-flex justify-content-between px-4">
          <p>Rate: {props.vote}</p>
          <p>Date: {props.releaseDate}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
