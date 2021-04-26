import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import SuggestionCard from "./suggestionCard/suggestionCard";
function Profile(props) {
  const context = useContext(UserContext);

  return (
    <div className="userProfile">
      <h1>
        Hello{" "}
        <span className="profileUserName">
          {context.mainState.userInfo.userName} !
        </span>
      </h1>
      <div
        style={{
          borderBottom: "2px solid white",
          width: "90%",
          margin: "5px auto",
        }}
      ></div>
      <h2>Our Selection For You:</h2>
      <div className="suggestionContainer w-100 d-flex flex-wrap justify-content-center">
        {context.mainState.userInfo.userSuggestions.map((movie) => {
          return (
            <SuggestionCard
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              movieName={movie.original_name}
              plot={movie.overview}
              rate={movie.vote_average}
            ></SuggestionCard>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
