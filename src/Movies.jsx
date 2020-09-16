import React from "react";
import Movie from "../Movie/Movie.jsx";
import "./styles.css";

class Movies extends React.Component {
  getMovie = (name, likes, banner) => {
    return <Movie name={name} likes={likes} banner={banner} />;
  };

  render() {
    return (
      <div className="movies-section">
        {this.getMovie(
          "Maharshi",
          "123.0k",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF6_bHUPvYIuZTotxm5_W8uk5hwQjAYpZGQQ&usqp=CAU"
        )}
        {this.getMovie(
          "V",
          "123.0k",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7bYFySmQviC413Y0KaYDbmpp86UHryfNhmw&usqp=CAU"
        )}
        {this.getMovie(
          "uppena",
          "123.0k",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxjYDw1N5Xd7HkgEQgmw1EKvItaL8ZQKnYcg&usqp=CAU"
        )}
      </div>
    );
  }
}

export default Movies;
