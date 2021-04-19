import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import MovieCard from "../MovieContainer/MovieCards/MovieCard";
function Profile(props) {
  const context = useContext(UserContext);
  console.log(context.mainState.myList);
  return (
    <div className="userProfile">
      <h1>Hello {context.mainState.userInfo.userName}!</h1>
      <h3>Your Favorites:</h3>
      <div
        style={{
          borderBottom: "2px solid white",
          width: "90%",
          margin: "5px auto",
        }}
      ></div>
      {context.mainState.myList.map((movie) => {
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
  );
}

export default Profile;
