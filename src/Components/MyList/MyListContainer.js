import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import MovieCard from "./MyListCard/MyListCard";
function AboutUs() {
  const context = useContext(UserContext);
  return (
    <div className="myList">
      <h1 className="mb-3">Your Favorite Movies:</h1>
      <div
        style={{
          borderBottom: "2px solid white",
          width: "90%",
          margin: "5px auto",
        }}
      ></div>
      <div className="favListContainer">
        {context.mainState.userInfo.myList.map((movie) => {
          console.log(movie);
          return (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              movieName={movie.original_title}
              plot={movie.overview}
              rate={movie.vote_average}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}

export default AboutUs;
