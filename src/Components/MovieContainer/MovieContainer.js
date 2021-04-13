import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import MovieCard from "./MovieCards/MovieCard";
function MovieContainer() {
  const context = useContext(UserContext);
  // console.log(context.mainState.movieData);
  console.log(
    context.mainState.totalMovies,
    context.mainState.keyWord.length > 1,
    context.mainState.movieData.length == 0
  );
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
    context.mainState.keyWord.length > 1 &&
    context.mainState.movieData.length == 0
  ) {
    return (
      <div className="movieContainer">
        <p
          style={{
            color: "red",
            fontSize: "3rem",
            marginBottom: "370px",
          }}
        >
          Movie not found!
        </p>
      </div>
    );
  } else {
    return <div className="movieContainer"></div>;
  }
}

export default MovieContainer;
