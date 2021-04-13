import { useContext } from "react";
import UserContext from "../../../ContextFolder/ContextProvider";
function MovieCard(props) {
  const context = useContext(UserContext);

  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w200/${props.poster}`}
        className="w-100"
        style={{ height: "85%" }}
      ></img>
      <h3
        className="d-flex justify-content-center align-items-center text-center"
        style={{ height: "15%" }}
      >
        {props.movieName}
      </h3>
    </div>
  );
}

export default MovieCard;
