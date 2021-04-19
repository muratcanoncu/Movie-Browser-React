import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import MovieCard from "./MovieCards/MovieCard";
function MovieContainer() {
  const context = useContext(UserContext);
  if (
    context.mainState.movieData.length > 0 &&
    context.mainState.totalMovies > 0
  ) {
    return (
      <div className="movieContainer py-5">
        {context.mainState.movieData.map((movie) => {
          if (movie.poster_path) {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                movieName={movie.original_title}
                plot={movie.overview}
                rate={movie.vote_average}
              ></MovieCard>
            );
          }
        })}
      </div>
    );
  } else if (
    context.mainState.totalMovies == 0 &&
    context.mainState.keyWord.length > 1
  ) {
    return (
      <div className="movieContainer">
        <p
          style={{
            color: "#e50914",
            fontSize: "3rem",
            marginBottom: "370px",
            width: "400px",
            textAlign: "center",
          }}
        >
          Movie not found!
        </p>
      </div>
    );
  } else {
    return (
      <div className="movieContainer">
        <p
          style={{
            color: "white",
            textShadow: "5px 5px 10px #e50914",
            fontSize: "2.2rem",
            marginBottom: "370px",
            width: "400px",
            textAlign: "center",
          }}
        >
          Please enter a movie name into the search bar
        </p>
      </div>
    );
  }
}

export default MovieContainer;
