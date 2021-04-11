import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import MovieCard from "./MovieCards/MovieCard";
function MovieContainer() {
  const context = useContext(UserContext);
  //   console.log(context.mainState.movieData);
  return (
    <div className="movieContainer">
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
        } else null;
      })}
    </div>
  );
}

export default MovieContainer;
