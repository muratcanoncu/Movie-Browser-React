import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import MovieCard from "../MovieContainer/MovieCards/MovieCard";
function Profile(props) {
  const context = useContext(UserContext);
  // console.log(context.mainState.userInfo);
  return (
    <div className="userProfile">
      <h1>Hello {context.mainState.userInfo.userName}!</h1>
      <div
        style={{
          borderBottom: "2px solid white",
          width: "90%",
          margin: "5px auto",
        }}
      ></div>
      <h2>Our Selection For You</h2>
      <div className="suggestionContainer w-100 d-flex flex-wrap justify-content-center">
        {context.mainState.userInfo.userSuggestions.map((suggestion) => {
          console.log(suggestion);
          return (
            <MovieCard
              key={suggestion.id}
              poster={suggestion.poster_path}
              movieName={suggestion.original_name}
              plot={suggestion.overview}
              rate={suggestion.vote_average}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
