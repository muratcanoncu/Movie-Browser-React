import React from "react";

function AboutUs() {
  return (
    <div className="myList">
      <h1>Your Favorites:</h1>
      <div
        style={{
          borderBottom: "2px solid white",
          width: "90%",
          margin: "5px auto",
        }}
      ></div>
      {context.mainState.userInfo.myList.map((movie) => {
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

export default AboutUs;
